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
import { getAllBlogOverrides } from './blog-content-overrides';
import { getAccommodationOverride } from './accommodation-overrides';
import { getItineraryOverride } from './itinerary-overrides';

const blogOverrides = new Map(getAllBlogOverrides().map((o) => [o.slug, o]));

function applyEntityOverride<T extends { slug?: string; heroImage?: string; image?: string; imageUrl?: string }>(
  item: T,
  override: { heroImage?: string } | undefined,
): T {
  if (override?.heroImage) {
    const obj = item as Record<string, unknown>;
    obj.heroImage = override.heroImage;
    obj.image = override.heroImage;
    obj.imageUrl = override.heroImage;
  }
  return item;
}

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

function withLegacyImageAlias<T extends { heroImage?: string; image?: string; imageUrl?: string }>(item: T): T {
  const src = item.heroImage ?? item.image ?? item.imageUrl;
  if (!src) return item;
  const obj = item as Record<string, unknown>;
  if (!item.image) obj.image = src;
  if (!item.heroImage) obj.heroImage = src;
  if (!item.imageUrl) obj.imageUrl = src;
  return item;
}

function withSlugAsId<T extends { id?: string; slug?: string }>(item: T): T {
  if (item.slug) {
    (item as Record<string, unknown>)._uuid = item.id;
    (item as Record<string, unknown>).id = item.slug;
  }
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

export const allItineraries = loaded.allItineraries
  .map(withLegacyImageAlias)
  .map(withSlugAsId)
  .map((it) => applyEntityOverride(it, it.slug ? getItineraryOverride(it.slug) : undefined));
export const allAccommodations = loaded.allAccommodations
  .map(withLegacyImageAlias)
  .map(withSlugAsId)
  .map((a) => applyEntityOverride(a, a.slug ? getAccommodationOverride(a.slug) : undefined));

// Build the set of valid blog slugs first, then rewrite content links so
// markdown bodies don't carry [text](/blog/<missing-slug>) anchors.
const blogPostsBase = loaded.allBlogPosts
  .map(withLegacyImageAlias)
  .map(withLegacyAuthor)
  .map(withSlugAsId);
const validBlogSlugs = new Set(blogPostsBase.map((p) => p.slug).filter(Boolean) as string[]);

function rewriteBlogContent(content: string | undefined): string | undefined {
  if (!content) return content;
  // [text](/blog/<slug>) — drop the link if slug is missing, keep the text.
  let out = content.replace(
    /\[([^\]]+)\]\(\/blog\/([a-z0-9-]+)\)/gi,
    (m, text: string, slug: string) => (validBlogSlugs.has(slug) ? m : text),
  );
  // [CTA:text](/blog/<slug>) — same logic.
  out = out.replace(
    /\[CTA:([^\]]+)\]\(\/blog\/([a-z0-9-]+)\)/gi,
    (m, text: string, slug: string) => (validBlogSlugs.has(slug) ? m : text),
  );
  // Legacy /blog/stations-service-corse pointed to the deprecated SPA
  // article; route it to the dedicated /stations-service page in v2.
  out = out.replace(/\/blog\/stations-service-corse\b/g, '/stations-service');
  return out;
}

function readingTimeFromContent(content: string): { label: string; minutes: number } {
  const words = content.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return { label: `${minutes} min de lecture`, minutes };
}

function synthesizePostFromOverride(o: ReturnType<typeof getAllBlogOverrides>[number]): BlogPost {
  const today = new Date().toISOString().slice(0, 10);
  const publishedAt = o.publishedAt || today;
  const { label, minutes } = readingTimeFromContent(o.content);
  return {
    id: o.slug,
    slug: o.slug,
    title: o.title ?? o.slug,
    excerpt: o.excerpt ?? '',
    content: o.content,
    category: o.category ?? 'Voyage',
    authorName: o.authorName ?? 'Corse à moto',
    publishedAt,
    isoDate: publishedAt,
    heroImage: o.heroImage ?? '',
    readingTime: label,
    readingMinutes: minutes,
    tags: o.tags ?? [],
  };
}

const existingSlugs = new Set(blogPostsBase.map((p) => p.slug).filter(Boolean) as string[]);
const synthesizedPosts = getAllBlogOverrides()
  .filter((o) => !existingSlugs.has(o.slug))
  .map(synthesizePostFromOverride);

export const allBlogPosts = [
  ...blogPostsBase.map((p) => {
    const post = p as typeof p & { content?: string; faq?: { q: string; a: string }[] };
    if (post.content) post.content = rewriteBlogContent(post.content);
    // Markdown override from v2/content/blog/<slug>.md takes priority over
    // the Supabase/legacy content — see src/lib/blog-content-overrides.ts.
    const override = post.slug ? blogOverrides.get(post.slug) : undefined;
    if (override) {
      if (override.title) (post as Record<string, unknown>).title = override.title;
      if (override.excerpt) (post as Record<string, unknown>).excerpt = override.excerpt;
      if (override.heroImage) {
        const obj = post as Record<string, unknown>;
        obj.heroImage = override.heroImage;
        obj.image = override.heroImage;
        obj.imageUrl = override.heroImage;
      }
      post.content = override.content;
      if (override.faq) post.faq = override.faq;
    }
    return p;
  }),
  ...(synthesizedPosts.map((p) => {
    const override = blogOverrides.get(p.slug);
    const post = withLegacyImageAlias(withSlugAsId(withLegacyAuthor(p as BlogPost))) as typeof p & {
      faq?: { q: string; a: string }[];
    };
    if (override?.faq) post.faq = override.faq;
    return post;
  })),
];
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
