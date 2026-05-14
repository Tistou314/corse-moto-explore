/**
 * Build-time data loader.
 *
 * Tries Supabase first when PUBLIC_SUPABASE_URL is set; falls back to the
 * legacy TS files (../../../src/data/...) if Supabase is unreachable or
 * misconfigured. Lets the build run in any environment.
 */
import type {
  Itinerary as SbItinerary,
  Accommodation as SbAccommodation,
  BlogPost as SbBlogPost,
  GasStation as SbGasStation,
} from './data-supabase';

export type Itinerary = SbItinerary;
export type Accommodation = SbAccommodation;
export type BlogPost = SbBlogPost;
export type GasStation = SbGasStation;
export type PointOfInterest = Itinerary['pointsOfInterest'][number];

const FORCE_LEGACY = process.env.CONTENT_SOURCE === 'legacy';
const SUPABASE_URL =
  process.env.PUBLIC_SUPABASE_URL ?? (import.meta as ImportMeta).env?.PUBLIC_SUPABASE_URL;

interface Loaded {
  allItineraries: Itinerary[];
  allAccommodations: Accommodation[];
  allBlogPosts: BlogPost[];
  allGasStations: GasStation[];
}

async function loadFromSupabase(): Promise<Loaded> {
  const mod = await import('./data-supabase');
  return {
    allItineraries: mod.allItineraries,
    allAccommodations: mod.allAccommodations,
    allBlogPosts: mod.allBlogPosts,
    allGasStations: mod.allGasStations,
  };
}

async function loadFromLegacy(): Promise<Loaded> {
  const mod = await import('./data-legacy');
  return {
    allItineraries: mod.allItineraries as unknown as Itinerary[],
    allAccommodations: mod.allAccommodations as unknown as Accommodation[],
    allBlogPosts: mod.allBlogPosts as unknown as BlogPost[],
    allGasStations: mod.allGasStations as unknown as GasStation[],
  };
}

let loaded: Loaded;
if (FORCE_LEGACY || !SUPABASE_URL) {
  loaded = await loadFromLegacy();
  console.info('[data] using legacy TS files');
} else {
  try {
    loaded = await loadFromSupabase();
    console.info(
      `[data] using Supabase: ${loaded.allItineraries.length} itineraries, ${loaded.allAccommodations.length} accommodations, ${loaded.allBlogPosts.length} blog posts, ${loaded.allGasStations.length} gas stations`,
    );
  } catch (err) {
    console.warn(`[data] Supabase unreachable, falling back to legacy: ${(err as Error).message}`);
    loaded = await loadFromLegacy();
  }
}

function withLegacyImageAlias<T extends { heroImage?: string; image?: string }>(item: T): T {
  if (!item.image && item.heroImage) (item as Record<string, unknown>).image = item.heroImage;
  if (!item.heroImage && item.image) (item as Record<string, unknown>).heroImage = item.image;
  return item;
}

function withLegacyAuthor<T extends { authorName?: string; authorAvatar?: string; authorBio?: string; author?: unknown }>(
  post: T,
): T {
  if (!post.author) {
    (post as Record<string, unknown>).author = {
      name: post.authorName ?? 'Corse à moto',
      avatar: post.authorAvatar ?? '',
      bio: post.authorBio ?? '',
    };
  }
  return post;
}

export const allItineraries = loaded.allItineraries.map(withLegacyImageAlias);
export const allAccommodations = loaded.allAccommodations.map(withLegacyImageAlias);
export const allBlogPosts = loaded.allBlogPosts.map(withLegacyImageAlias).map(withLegacyAuthor);
export const allGasStations = loaded.allGasStations;

export function getItineraryBySlug(slug: string) {
  return allItineraries.find((it) => it.slug === slug);
}
export function getAccommodationBySlug(slug: string) {
  return allAccommodations.find((a) => a.slug === slug);
}
export function getBlogPostBySlug(slug: string) {
  return allBlogPosts.find((p) => p.slug === slug);
}
