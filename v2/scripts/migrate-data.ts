/*
 * scripts/migrate-data.ts
 *
 * Reads the legacy TS data files from ../src/data/** and pushes them into Supabase.
 * Downloads external (Unsplash, /lovable-uploads) images and uploads them to Storage.
 *
 * Usage:
 *   PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... npx tsx scripts/migrate-data.ts
 *
 * Flags:
 *   --dry-run     compute everything, log counts, do not write to Supabase
 *   --skip-images skip image downloads, keep external URLs as-is
 *   --only=itineraries,accommodations,blog,gas,authors,poi
 */

import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { Buffer } from 'node:buffer';
import { extname } from 'node:path';
import { slugify } from '../src/lib/utils';

// ---------- Legacy imports ----------
import { itineraries as legacyItineraries } from '../../src/data/itineraries';
import { accommodations as legacyAccommodations } from '../../src/data/accommodations';
import { allGasStations as legacyGasStations } from '../../src/data/gas-stations';
import { standardAuthor as legacyStandardAuthor } from '../../src/data/authors';
import { aspectsPratiquesArticles } from '../../src/data/blog/aspects-pratiques';
import { aspectsTechniquesArticles } from '../../src/data/blog/aspects-techniques';
import { cultureArticles } from '../../src/data/blog/culture';
import { equipementArticles } from '../../src/data/blog/equipement';
import { experiencesArticles } from '../../src/data/blog/experiences';
import { saisonsArticles } from '../../src/data/blog/saisons';

const legacyBlogPosts = [
  ...aspectsPratiquesArticles,
  ...aspectsTechniquesArticles,
  ...cultureArticles,
  ...equipementArticles,
  ...experiencesArticles,
  ...saisonsArticles,
];

// ---------- Flags ----------
const argv = process.argv.slice(2);
const DRY_RUN = argv.includes('--dry-run');
const SKIP_IMAGES = argv.includes('--skip-images');
const onlyArg = argv.find((a) => a.startsWith('--only='));
const ONLY = onlyArg ? new Set(onlyArg.split('=')[1].split(',')) : null;
const includes = (key: string) => !ONLY || ONLY.has(key);

// ---------- Supabase ----------
const SUPABASE_URL = process.env.PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!DRY_RUN && (!SUPABASE_URL || !SUPABASE_KEY)) {
  console.error('Missing PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in env.');
  process.exit(1);
}
const supabase: SupabaseClient | null = DRY_RUN
  ? null
  : createClient(SUPABASE_URL!, SUPABASE_KEY!, { auth: { persistSession: false } });

// ---------- Helpers ----------
const usedSlugs = new Map<string, Set<string>>();
function uniqSlug(scope: string, raw: string): string {
  const base = slugify(raw) || 'item';
  const set = usedSlugs.get(scope) ?? new Set<string>();
  let candidate = base;
  let i = 2;
  while (set.has(candidate)) candidate = `${base}-${i++}`;
  set.add(candidate);
  usedSlugs.set(scope, set);
  return candidate;
}

interface UploadedImage {
  publicUrl: string;
  storagePath: string;
}

async function downloadAndUpload(
  url: string | undefined,
  bucket: string,
  fileBase: string,
): Promise<string | null> {
  if (!url) return null;
  if (SKIP_IMAGES || DRY_RUN) return url;
  try {
    const isLocal = url.startsWith('/');
    const fetchUrl = isLocal ? new URL(url, 'https://corse-moto-explore.lovable.dev').toString() : url;
    const resp = await fetch(fetchUrl);
    if (!resp.ok) {
      console.warn(`  · image fetch failed (${resp.status}) ${url}`);
      return url;
    }
    const contentType = resp.headers.get('content-type') ?? 'image/jpeg';
    const buffer = Buffer.from(await resp.arrayBuffer());
    const ext = (extname(new URL(fetchUrl).pathname) || `.${contentType.split('/').pop()}`).slice(0, 5);
    const safeExt = /^\.[a-z0-9]+$/i.test(ext) ? ext : '.jpg';
    const path = `${fileBase}${safeExt}`;
    const { error } = await supabase!.storage
      .from(bucket)
      .upload(path, buffer, { contentType, upsert: true, cacheControl: '31536000' });
    if (error) {
      console.warn(`  · storage upload failed ${path}: ${error.message}`);
      return url;
    }
    const { data } = supabase!.storage.from(bucket).getPublicUrl(path);
    return data.publicUrl;
  } catch (err) {
    console.warn(`  · download error for ${url}: ${(err as Error).message}`);
    return url;
  }
}

async function upsert(table: string, rows: Record<string, unknown>[], onConflict = 'legacy_id') {
  if (DRY_RUN || !rows.length) return rows.length;
  // batches of 100
  let inserted = 0;
  for (let i = 0; i < rows.length; i += 100) {
    const batch = rows.slice(i, i + 100);
    const { error, data } = await supabase!
      .from(table)
      .upsert(batch, { onConflict })
      .select('id');
    if (error) {
      console.error(`  ✗ upsert ${table} batch ${i}: ${error.message}`);
      throw error;
    }
    inserted += data?.length ?? batch.length;
  }
  return inserted;
}

// ---------- Authors ----------
async function migrateAuthors() {
  if (!includes('authors')) return new Map<string, string>();
  console.log('▸ authors');
  const seen = new Map<string, { name: string; avatar?: string; bio?: string }>();
  const collect = (a?: { name?: string; avatar?: string; bio?: string }) => {
    if (!a?.name) return;
    const key = slugify(a.name);
    if (!seen.has(key)) seen.set(key, { name: a.name, avatar: a.avatar, bio: a.bio });
  };
  collect({
    name: legacyStandardAuthor.name,
    avatar: legacyStandardAuthor.avatar,
    bio: legacyStandardAuthor.bio,
  });
  for (const post of legacyBlogPosts) collect(post.author);

  const rows: Record<string, unknown>[] = [];
  for (const [legacyId, a] of seen) {
    const avatar = await downloadAndUpload(a.avatar, 'authors-avatars', legacyId);
    rows.push({ legacy_id: legacyId, name: a.name, avatar_url: avatar, bio: a.bio ?? null });
  }
  await upsert('authors', rows);
  console.log(`  · ${rows.length} authors`);

  if (DRY_RUN) return new Map(rows.map((r) => [r.legacy_id as string, 'dry-run-id']));
  const { data, error } = await supabase!.from('authors').select('id,legacy_id');
  if (error) throw error;
  return new Map((data ?? []).map((a) => [a.legacy_id as string, a.id as string]));
}

// ---------- Itineraries ----------
async function migrateItineraries() {
  if (!includes('itineraries')) return { count: 0 };
  console.log('▸ itineraries');
  const rows: Record<string, unknown>[] = [];
  const poiRows: Record<string, unknown>[] = [];
  for (const it of legacyItineraries as any[]) {
    const slug = uniqSlug('itinerary', it.id || it.title);
    const hero = await downloadAndUpload(it.image, 'itineraries-images', `${slug}/hero`);
    rows.push({
      legacy_id: it.id,
      slug,
      title: it.title,
      description: it.description ?? null,
      full_description: it.fullDescription ?? null,
      hero_image: hero,
      duration: it.duration ?? null,
      distance: typeof it.distance === 'number' ? String(it.distance) : it.distance ?? null,
      difficulty: it.difficulty ?? null,
      region: it.region ?? null,
      start_point: it.startPoint ?? null,
      end_point: it.endPoint ?? null,
      elevation: it.elevation ?? null,
      road_type: it.roadType ?? null,
      best_season: it.bestSeason ?? null,
      road_condition: it.roadCondition ?? null,
      highlights: it.highlights ?? [],
      tips: it.tips ?? [],
      latitude: it.latitude ?? null,
      longitude: it.longitude ?? null,
      published: true,
    });

    const pois = Array.isArray(it.pointsOfInterest) ? it.pointsOfInterest : [];
    for (let i = 0; i < pois.length; i++) {
      const p = pois[i];
      if (typeof p === 'string') {
        poiRows.push({
          legacy_id: `${it.id}-poi-${i}`,
          itinerary_legacy: it.id,
          name: p,
          order_idx: i,
        });
      } else if (p && typeof p === 'object') {
        const poiImage = await downloadAndUpload(p.image, 'itineraries-images', `${slug}/poi-${i}`);
        poiRows.push({
          legacy_id: `${it.id}-poi-${i}`,
          itinerary_legacy: it.id,
          name: p.name,
          description: p.description ?? null,
          image: poiImage,
          latitude: p.latitude ?? null,
          longitude: p.longitude ?? null,
          order_idx: i,
        });
      }
    }
  }
  await upsert('itineraries', rows);

  // Resolve itinerary ids for POIs
  if (poiRows.length && !DRY_RUN) {
    const { data, error } = await supabase!.from('itineraries').select('id,legacy_id');
    if (error) throw error;
    const map = new Map((data ?? []).map((r) => [r.legacy_id as string, r.id as string]));
    const linked = poiRows
      .map((p) => ({
        legacy_id: p.legacy_id,
        itinerary_id: map.get(p.itinerary_legacy as string),
        name: p.name,
        description: p.description ?? null,
        image: p.image ?? null,
        latitude: p.latitude ?? null,
        longitude: p.longitude ?? null,
        order_idx: p.order_idx,
      }))
      .filter((p) => p.itinerary_id);
    await upsert('points_of_interest', linked);
  }
  console.log(`  · ${rows.length} itineraries, ${poiRows.length} POIs`);
  return { count: rows.length, pois: poiRows.length };
}

// ---------- Accommodations ----------
async function migrateAccommodations() {
  if (!includes('accommodations')) return { count: 0 };
  console.log('▸ accommodations');
  const rows: Record<string, unknown>[] = [];
  for (const a of legacyAccommodations as any[]) {
    const slug = uniqSlug('accommodation', a.id || a.name);
    const hero = await downloadAndUpload(a.image, 'accommodations-images', `${slug}/hero`);
    rows.push({
      legacy_id: a.id,
      slug,
      name: a.name,
      type: a.type,
      description: a.description ?? null,
      location: a.location ?? null,
      region: a.region ?? null,
      hero_image: hero,
      price_range: a.priceRange ?? null,
      rating: typeof a.rating === 'number' ? a.rating : null,
      amenities: a.amenities ?? [],
      biker_amenities: a.bikerAmenities ?? [],
      contact_phone: a.contact?.phone ?? null,
      contact_email: a.contact?.email ?? null,
      contact_website: a.contact?.website ?? null,
      booking_link: a.bookingLink ?? null,
      affiliate_link: null,
      address: a.address ?? null,
      latitude: a.latitude ?? null,
      longitude: a.longitude ?? null,
      images: [],
      serp_image_url: null,
      published: true,
    });
  }
  await upsert('accommodations', rows);
  console.log(`  · ${rows.length} accommodations`);
  return { count: rows.length };
}

// ---------- Blog ----------
async function migrateBlog(authorIds: Map<string, string>) {
  if (!includes('blog')) return { count: 0 };
  console.log('▸ blog');
  const rows: Record<string, unknown>[] = [];
  for (const post of legacyBlogPosts as any[]) {
    const slug = uniqSlug('blog', post.slug || post.id || post.title);
    const hero = await downloadAndUpload(post.imageUrl, 'blog-images', `${slug}/hero`);
    const authorKey = post.author?.name ? slugify(post.author.name) : null;
    const authorId = authorKey ? authorIds.get(authorKey) ?? null : null;
    let readingTime: number | null = null;
    if (typeof post.readingTime === 'string') {
      const m = post.readingTime.match(/\d+/);
      readingTime = m ? Number(m[0]) : null;
    } else if (typeof post.readingTime === 'number') {
      readingTime = post.readingTime;
    }
    let publishedAt: string | null = null;
    if (post.date) {
      const d = new Date(post.date);
      if (!isNaN(d.getTime())) publishedAt = d.toISOString();
    }
    rows.push({
      legacy_id: post.id,
      slug,
      title: post.title,
      excerpt: post.excerpt ?? null,
      content: post.content ?? null,
      category: post.category ?? null,
      author_id: authorId,
      hero_image: hero,
      reading_time: readingTime,
      tags: post.tags ?? [],
      published_at: publishedAt,
      published: true,
    });
  }
  await upsert('blog_posts', rows);
  console.log(`  · ${rows.length} blog posts`);
  return { count: rows.length };
}

// ---------- Gas stations ----------
async function migrateGasStations() {
  if (!includes('gas')) return { count: 0 };
  console.log('▸ gas stations');
  const rows: Record<string, unknown>[] = [];
  for (const g of legacyGasStations as any[]) {
    rows.push({
      legacy_id: g.id,
      name: g.name,
      brand: g.brand ?? null,
      latitude: g.latitude ?? null,
      longitude: g.longitude ?? null,
      address: g.address ?? null,
      region: g.region ?? null,
      opening_hours: g.hours ?? null,
      fuel_types: g.fuelTypes ?? [],
      services: g.services ?? [],
      strategic: !!g.isStrategic,
      seasonal_hours: !!g.seasonalHours,
    });
  }
  await upsert('gas_stations', rows);
  console.log(`  · ${rows.length} gas stations`);
  return { count: rows.length };
}

// ---------- Diff vs legacy ----------
function diffReport(counts: Record<string, number>) {
  const expected = {
    itineraries: legacyItineraries.length,
    accommodations: legacyAccommodations.length,
    blog: legacyBlogPosts.length,
    gas: legacyGasStations.length,
  };
  console.log('\n— Diff vs legacy —');
  for (const [k, v] of Object.entries(expected)) {
    const got = counts[k] ?? 0;
    const status = got >= v ? '✓' : '✗';
    console.log(`  ${status} ${k}: legacy=${v} migrated=${got}`);
  }
}

// ---------- Main ----------
async function main() {
  console.log(DRY_RUN ? '── DRY RUN ──' : '── MIGRATION ──');
  const authorIds = await migrateAuthors();
  const it = await migrateItineraries();
  const ac = await migrateAccommodations();
  const bl = await migrateBlog(authorIds);
  const gs = await migrateGasStations();
  diffReport({
    itineraries: it.count ?? 0,
    accommodations: ac.count ?? 0,
    blog: bl.count ?? 0,
    gas: gs.count ?? 0,
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
