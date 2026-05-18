/**
 * Per-accommodation overrides.
 *
 * The migrated Supabase dataset gave every hébergement a generic Unsplash
 * placeholder image; 23 of the 26 records share between 5-6 stock photos
 * (audit 2026-05-18). For SEO and trust this is poor: a hotel listing must
 * look like the actual hotel.
 *
 * Overrides declared in `v2/content/accommodations.json` replace the
 * heroImage on a per-slug basis, sourced from each establishment's
 * official website, GMB, or SerpAPI image picker (already integrated in
 * the admin BO).
 *
 * Same flow as the blog override system: declared in git, applied at
 * build time on top of Supabase, no DB round-trip. Baptiste can also
 * keep using the SerpAPI image picker in the admin BO to update
 * Supabase directly for new properties.
 */
import overridesData from '../../content/accommodations.json';

export interface AccommodationOverride {
  slug: string;
  heroImage?: string;
  source?: string;
}

const overrides = new Map<string, AccommodationOverride>(
  (overridesData as AccommodationOverride[])
    .filter((o) => o.slug && !o.slug.startsWith('_'))
    .map((o) => [o.slug, o]),
);

export function getAccommodationOverride(slug: string): AccommodationOverride | undefined {
  return overrides.get(slug);
}
