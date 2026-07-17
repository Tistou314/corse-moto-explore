/**
 * Populate accommodations.serp_image_url with real photos.
 *
 * Strategy (hybrid):
 *   1. If contact_website is set, try to fetch its og:image
 *   2. Otherwise (or if step 1 fails), query SerpAPI google_maps to get
 *      data_id, then google_maps_photos to get the first photo URL
 *
 * Skips rows that already have a serp_image_url unless --force is passed.
 *
 * Usage: npx tsx scripts/populate-accommodation-photos.ts [--force] [--dry] [--only=slug1,slug2] [--skip-og]
 *
 * Env required: PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, SERPAPI_KEY
 */

import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.PUBLIC_SUPABASE_URL!;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const SERPAPI_KEY = process.env.SERPAPI_KEY!;

if (!SUPABASE_URL || !SERVICE_KEY || !SERPAPI_KEY) {
  console.error('Missing env: PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, SERPAPI_KEY');
  process.exit(1);
}

const argv = process.argv.slice(2);
const FORCE = argv.includes('--force');
const DRY = argv.includes('--dry');
// Skip the official-website og:image step and go straight to Google Maps
// (GBP) photos — for establishments whose og:image is a favicon/logo/
// low-res crop rather than an actual photo.
const SKIP_OG = argv.includes('--skip-og');
const ONLY = argv.find((a) => a.startsWith('--only='))?.slice(7).split(',').filter(Boolean) ?? null;

const sb = createClient(SUPABASE_URL, SERVICE_KEY);

interface Row {
  id: string;
  slug: string;
  name: string;
  location: string | null;
  region: string | null;
  contact_website: string | null;
  hero_image: string | null;
  serp_image_url: string | null;
}

async function fetchOgImage(websiteUrl: string): Promise<string | null> {
  try {
    const url = websiteUrl.startsWith('http') ? websiteUrl : `https://${websiteUrl}`;
    const resp = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; CorseAMotoBot/1.0)' },
      signal: AbortSignal.timeout(8000),
    });
    if (!resp.ok) return null;
    const html = await resp.text();
    const match =
      html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i) ??
      html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i) ??
      html.match(/<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i);
    if (!match) return null;
    let img = match[1].trim();
    if (img.startsWith('//')) img = 'https:' + img;
    else if (img.startsWith('/')) {
      const u = new URL(url);
      img = `${u.origin}${img}`;
    }
    return img.startsWith('http') ? img : null;
  } catch (err) {
    return null;
  }
}

interface SerpMapsResult {
  data_id?: string;
  place_id?: string;
  thumbnail?: string;
}

async function serpApiMapsSearch(query: string): Promise<SerpMapsResult | null> {
  const params = new URLSearchParams({
    engine: 'google_maps',
    type: 'search',
    q: query,
    hl: 'fr',
    api_key: SERPAPI_KEY,
  });
  const resp = await fetch(`https://serpapi.com/search.json?${params}`, {
    signal: AbortSignal.timeout(15000),
  });
  if (!resp.ok) {
    console.warn(`    SerpAPI maps HTTP ${resp.status}`);
    return null;
  }
  const data: any = await resp.json();
  const first = data.place_results ?? data.local_results?.[0];
  if (!first) return null;
  return {
    data_id: first.data_id,
    place_id: first.place_id,
    thumbnail: first.thumbnail,
  };
}

async function serpApiMapsPhotos(data_id: string): Promise<string | null> {
  const params = new URLSearchParams({
    engine: 'google_maps_photos',
    data_id,
    hl: 'fr',
    api_key: SERPAPI_KEY,
  });
  const resp = await fetch(`https://serpapi.com/search.json?${params}`, {
    signal: AbortSignal.timeout(15000),
  });
  if (!resp.ok) {
    console.warn(`    SerpAPI photos HTTP ${resp.status}`);
    return null;
  }
  const data: any = await resp.json();
  const first = data.photos?.[0];
  if (!first) return null;
  // Prefer the highest-res variant available
  return first.image ?? first.thumbnail ?? null;
}

async function fetchFromSerpApi(name: string, location: string | null): Promise<string | null> {
  const q = `${name}${location ? ` ${location}` : ''} Corse`;
  const place = await serpApiMapsSearch(q);
  if (!place) return null;
  if (place.data_id) {
    const photo = await serpApiMapsPhotos(place.data_id);
    if (photo) return photo;
  }
  // Fallback: low-res thumbnail from search result
  return place.thumbnail ?? null;
}

async function main() {
  console.log('▸ Fetching accommodations from Supabase…');
  const { data, error } = await sb
    .from('accommodations')
    .select('id, slug, name, location, region, contact_website, hero_image, serp_image_url')
    .order('name');
  if (error) throw error;
  let rows = data as Row[];

  if (ONLY) {
    rows = rows.filter((r) => ONLY.includes(r.slug));
    console.log(`  filtered to ${rows.length} rows by --only`);
  }

  console.log(`  ${rows.length} rows loaded`);
  const stats = { skipped: 0, og: 0, serp: 0, fail: 0 };

  for (const row of rows) {
    if (!FORCE && row.serp_image_url) {
      console.log(`✓ ${row.slug} — already has serp_image_url, skip`);
      stats.skipped++;
      continue;
    }

    console.log(`▸ ${row.slug} (${row.name})`);
    let img: string | null = null;
    let source: string = '';

    if (row.contact_website && !SKIP_OG) {
      console.log(`    trying og:image from ${row.contact_website}…`);
      img = await fetchOgImage(row.contact_website);
      if (img) source = 'og';
    }

    if (!img) {
      console.log(`    trying SerpAPI Google Maps…`);
      img = await fetchFromSerpApi(row.name, row.location);
      if (img) source = 'serp';
    }

    if (!img) {
      console.log(`    ✗ no image found`);
      stats.fail++;
      continue;
    }

    console.log(`    ✓ found via ${source}: ${img.slice(0, 80)}…`);
    if (source === 'og') stats.og++;
    else stats.serp++;

    if (!DRY) {
      const { error: upErr } = await sb
        .from('accommodations')
        .update({ serp_image_url: img })
        .eq('id', row.id);
      if (upErr) {
        console.warn(`    update failed: ${upErr.message}`);
        stats.fail++;
      }
    }
  }

  console.log('\n=== Summary ===');
  console.log(`skipped (already had image): ${stats.skipped}`);
  console.log(`og:image fetched:            ${stats.og}`);
  console.log(`SerpAPI fetched:             ${stats.serp}`);
  console.log(`failed:                      ${stats.fail}`);
  if (DRY) console.log('(dry run — no DB writes)');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
