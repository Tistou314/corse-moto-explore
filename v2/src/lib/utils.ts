import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(input: string): string {
  return input
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export const SITE_URL =
  (import.meta as ImportMeta).env?.PUBLIC_SITE_URL ?? 'https://www.corseamoto.com';

export function absoluteUrl(path: string): string {
  const base = SITE_URL.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}

/**
 * Human-readable provenance caption for an establishment photo.
 *
 * Priority: an explicit `source` label (from content/accommodations.json
 * overrides) wins; otherwise the origin is inferred from the image host:
 *  - Google-hosted photos (lh3.googleusercontent.com, *.ggpht.com,
 *    streetview…) come from the establishment's Google Business Profile —
 *    that's what scripts/populate-accommodation-photos.ts writes;
 *  - an image served from the establishment's own domain is its official
 *    site (og:image path of the same script);
 *  - Unsplash images are generic illustrations and are labelled as such;
 *  - local /lovable-uploads/ images are the site's own — no caption.
 * Returns null when no caption should be shown.
 */
export function imageCredit(
  imageUrl: string | undefined,
  websiteUrl?: string,
  overrideSource?: string,
): string | null {
  if (overrideSource) return `Photo : ${overrideSource}`;
  if (!imageUrl || !imageUrl.startsWith('http')) return null;
  let host: string;
  try {
    host = new URL(imageUrl).hostname;
  } catch {
    return null;
  }
  if (/(^|\.)googleusercontent\.com$|(^|\.)ggpht\.com$|(^|\.)gstatic\.com$/.test(host)) {
    return "Photo : fiche Google Business Profile de l'établissement";
  }
  if (host === 'images.unsplash.com') {
    return "Photo d'illustration : Unsplash";
  }
  if (websiteUrl) {
    try {
      const siteHost = new URL(websiteUrl.startsWith('http') ? websiteUrl : `https://${websiteUrl}`)
        .hostname.replace(/^www\./, '');
      if (host.replace(/^www\./, '').endsWith(siteHost)) {
        return "Photo : site officiel de l'établissement";
      }
    } catch {
      /* invalid website URL — fall through */
    }
  }
  return `Photo : ${host.replace(/^www\./, '')}`;
}

/**
 * Sibling .webp path for a local raster image. Returns null when the
 * source is not a local png/jpg (e.g. an external/Supabase URL), so
 * callers can skip the <source> and just render the original.
 * The .webp files are produced by scripts/optimize-images.ts.
 */
export function webpVariant(src: string | undefined): string | null {
  if (!src) return null;
  if (!src.startsWith('/lovable-uploads/')) return null;
  if (!/\.(png|jpe?g)$/i.test(src)) return null;
  return src.replace(/\.(png|jpe?g)$/i, '.webp');
}

/**
 * Hero `src` for a possibly-remote image.
 *
 * Unsplash URLs in the dataset carry no width, so the CDN serves its
 * largest rendition for what is at most a 1600px-wide hero. Pinning the
 * width and asking for `auto=format` lets Unsplash return WebP/AVIF.
 *
 * Callers that preload the hero MUST build the preload href with this same
 * helper: a preload whose URL differs from the rendered `src` by even one
 * query parameter downloads the image twice instead of once.
 */
export function heroImageSrc(src: string | undefined, width = 1600): string | undefined {
  if (!src || !src.includes('images.unsplash.com')) return src;
  try {
    const u = new URL(src);
    u.searchParams.set('w', String(width));
    u.searchParams.set('q', '75');
    u.searchParams.set('auto', 'format');
    return u.toString();
  } catch {
    return src;
  }
}

/**
 * 320px-wide WebP thumbnail path for a local raster image — for small
 * sidebar/card thumbnails. Falls back to the original src when the
 * image is not a known local upload. Thumbnails are produced by
 * scripts/optimize-images.ts.
 */
export function thumbVariant(src: string | undefined): string | undefined {
  if (!src) return src;
  if (!src.startsWith('/lovable-uploads/')) return src;
  if (!/\.(png|jpe?g)$/i.test(src)) return src;
  return src.replace(/\.(png|jpe?g)$/i, '-thumb.webp');
}
