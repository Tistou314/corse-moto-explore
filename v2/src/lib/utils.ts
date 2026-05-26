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
