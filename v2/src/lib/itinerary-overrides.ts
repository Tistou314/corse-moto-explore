/**
 * Per-itinerary overrides.
 *
 * Same principle as accommodation-overrides.ts: when the Supabase data
 * carries a generic placeholder image (eg cap-corse and route-cols
 * which still use external Unsplash URLs from the original migration),
 * declare a replacement here in `v2/content/itineraries.json`. The
 * override applies at build time, no DB round-trip needed.
 */
import overridesData from '../../content/itineraries.json';

export interface ItineraryOverride {
  slug: string;
  heroImage?: string;
  source?: string;
}

const overrides = new Map<string, ItineraryOverride>(
  (overridesData as ItineraryOverride[])
    .filter((o) => o.slug && !o.slug.startsWith('_'))
    .map((o) => [o.slug, o]),
);

export function getItineraryOverride(slug: string): ItineraryOverride | undefined {
  return overrides.get(slug);
}
