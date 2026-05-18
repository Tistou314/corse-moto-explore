/**
 * Audit & fix GPS coordinates for accommodations and gas stations.
 *
 * For accommodations:
 *   - If lat/lng missing, query SerpAPI google_maps and write the result.
 *   - If --force, re-geocode even if lat/lng already set.
 *
 * For gas stations:
 *   - Query SerpAPI google_maps and compare distance to stored coords.
 *   - If delta > 200 m, log as suspect.
 *   - By default no DB writes. Pass --apply to update suspects with the
 *     SerpAPI result (use with care; SerpAPI can mismatch when names
 *     are generic).
 *
 * Usage: npx tsx scripts/audit-gps-coordinates.ts
 *          [--type=accommodations|gas_stations|all]
 *          [--apply]   (writes gas-station fixes)
 *          [--force]   (re-geocode accommodations that already have GPS)
 *          [--dry]     (no writes at all)
 *          [--threshold-m=200]
 *          [--limit=N] (cap SerpAPI calls, useful for tier quotas)
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
const TYPE = (argv.find((a) => a.startsWith('--type='))?.slice(7) ?? 'all') as
  | 'accommodations'
  | 'gas_stations'
  | 'all';
const APPLY = argv.includes('--apply');
const FORCE = argv.includes('--force');
const DRY = argv.includes('--dry');
const THRESHOLD_M = parseInt(argv.find((a) => a.startsWith('--threshold-m='))?.slice(14) ?? '200', 10);
const LIMIT = parseInt(argv.find((a) => a.startsWith('--limit='))?.slice(8) ?? '0', 10) || Infinity;

const sb = createClient(SUPABASE_URL, SERVICE_KEY);

let serpCalls = 0;

interface MapsResult {
  lat: number;
  lng: number;
  matchedName: string;
}

async function serpApiMapsSearch(query: string): Promise<MapsResult | null> {
  if (serpCalls >= LIMIT) {
    console.log(`    [limit reached: ${LIMIT} SerpAPI calls, skipping]`);
    return null;
  }
  serpCalls++;
  const params = new URLSearchParams({
    engine: 'google_maps',
    type: 'search',
    q: query,
    hl: 'fr',
    api_key: SERPAPI_KEY,
  });
  try {
    const resp = await fetch(`https://serpapi.com/search.json?${params}`, {
      signal: AbortSignal.timeout(15000),
    });
    if (!resp.ok) {
      console.warn(`    SerpAPI HTTP ${resp.status}`);
      return null;
    }
    const data: any = await resp.json();
    const first = data.place_results ?? data.local_results?.[0];
    if (!first?.gps_coordinates) return null;
    return {
      lat: first.gps_coordinates.latitude,
      lng: first.gps_coordinates.longitude,
      matchedName: first.title ?? '',
    };
  } catch (err) {
    console.warn(`    SerpAPI error: ${(err as Error).message}`);
    return null;
  }
}

// Haversine distance in metres
function distMeters(a: { lat: number; lng: number }, b: { lat: number; lng: number }): number {
  const R = 6371000;
  const φ1 = (a.lat * Math.PI) / 180;
  const φ2 = (b.lat * Math.PI) / 180;
  const Δφ = ((b.lat - a.lat) * Math.PI) / 180;
  const Δλ = ((b.lng - a.lng) * Math.PI) / 180;
  const h = Math.sin(Δφ / 2) ** 2 + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

async function auditAccommodations() {
  console.log('\n▸ Accommodations');
  const { data, error } = await sb
    .from('accommodations')
    .select('id, slug, name, location, region, address, latitude, longitude')
    .order('name');
  if (error) throw error;
  const rows = data as any[];
  let geocoded = 0;
  let skipped = 0;
  let missing = 0;
  let failed = 0;
  for (const row of rows) {
    const hasGps = typeof row.latitude === 'number' && typeof row.longitude === 'number';
    if (hasGps && !FORCE) {
      skipped++;
      continue;
    }
    if (!hasGps) missing++;
    const q = `${row.name} ${row.address ?? ''} ${row.location ?? ''} Corse`.replace(/\s+/g, ' ').trim();
    console.log(`  ▸ ${row.slug}: ${q}`);
    const res = await serpApiMapsSearch(q);
    if (!res) {
      console.log(`      ✗ not found`);
      failed++;
      continue;
    }
    console.log(`      ✓ ${res.lat.toFixed(6)}, ${res.lng.toFixed(6)}  ← "${res.matchedName}"`);
    if (!DRY) {
      const { error: upErr } = await sb
        .from('accommodations')
        .update({ latitude: res.lat, longitude: res.lng })
        .eq('id', row.id);
      if (upErr) {
        console.warn(`      update failed: ${upErr.message}`);
        failed++;
        continue;
      }
    }
    geocoded++;
  }
  console.log(`\n  total=${rows.length}  missing GPS=${missing}  geocoded=${geocoded}  skipped=${skipped}  failed=${failed}`);
}

async function auditGasStations() {
  console.log('\n▸ Gas stations');
  const { data, error } = await sb
    .from('gas_stations')
    .select('id, name, brand, address, region, latitude, longitude')
    .order('name');
  if (error) throw error;
  const rows = data as any[];
  const suspects: Array<{ id: string; name: string; stored: any; found: MapsResult; delta: number; address: string }> = [];
  let checked = 0;
  let ok = 0;
  let noCoord = 0;
  let notFound = 0;
  for (const row of rows) {
    if (typeof row.latitude !== 'number' || typeof row.longitude !== 'number') {
      noCoord++;
      continue;
    }
    const q = `${row.name} ${row.address ?? ''} Corse`.replace(/\s+/g, ' ').trim();
    const res = await serpApiMapsSearch(q);
    checked++;
    if (!res) {
      notFound++;
      continue;
    }
    const delta = distMeters({ lat: row.latitude, lng: row.longitude }, res);
    if (delta > THRESHOLD_M) {
      suspects.push({ id: row.id, name: row.name, stored: { lat: row.latitude, lng: row.longitude }, found: res, delta, address: row.address ?? '' });
    } else {
      ok++;
    }
  }
  console.log(`\n  total=${rows.length}  checked=${checked}  ok=${ok}  no-coord=${noCoord}  not-found=${notFound}  suspect=${suspects.length}`);
  if (suspects.length) {
    console.log(`\n  Suspects (delta > ${THRESHOLD_M} m):`);
    for (const s of suspects.slice().sort((a, b) => b.delta - a.delta)) {
      console.log(`    ${s.name}`);
      console.log(`      addr: ${s.address}`);
      console.log(`      stored: ${s.stored.lat.toFixed(6)}, ${s.stored.lng.toFixed(6)}`);
      console.log(`      found:  ${s.found.lat.toFixed(6)}, ${s.found.lng.toFixed(6)}  (${Math.round(s.delta)} m)`);
      console.log(`      matched: "${s.found.matchedName}"`);
    }
    if (APPLY && !DRY) {
      console.log(`\n  Applying ${suspects.length} updates…`);
      for (const s of suspects) {
        const { error: upErr } = await sb
          .from('gas_stations')
          .update({ latitude: s.found.lat, longitude: s.found.lng })
          .eq('id', s.id);
        if (upErr) console.warn(`    ${s.name} update failed: ${upErr.message}`);
        else console.log(`    ✓ ${s.name}`);
      }
    } else {
      console.log(`\n  (no DB writes — pass --apply to update suspects)`);
    }
  }
}

async function main() {
  console.log(`▸ Audit GPS coordinates`);
  console.log(`  type=${TYPE} apply=${APPLY} force=${FORCE} dry=${DRY} threshold=${THRESHOLD_M}m limit=${LIMIT === Infinity ? '∞' : LIMIT}`);
  if (TYPE === 'accommodations' || TYPE === 'all') await auditAccommodations();
  if (TYPE === 'gas_stations' || TYPE === 'all') await auditGasStations();
  console.log(`\n[SerpAPI calls: ${serpCalls}]`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
