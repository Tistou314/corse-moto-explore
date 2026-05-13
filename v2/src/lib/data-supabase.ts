/**
 * Build-time data loader that reads everything from Supabase.
 * Switched on by setting CONTENT_SOURCE=supabase at build time;
 * otherwise src/lib/data.ts (legacy TS files) is used.
 */
import { createClient } from '@supabase/supabase-js';

const URL = process.env.PUBLIC_SUPABASE_URL ?? import.meta.env.PUBLIC_SUPABASE_URL;
const KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ??
  process.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!URL || !KEY) {
  throw new Error('[data-supabase] missing PUBLIC_SUPABASE_URL or key in env');
}

const client = createClient(URL, KEY, { auth: { persistSession: false } });

async function selectAll<T>(table: string, columns = '*', order?: { col: string; asc?: boolean }) {
  let q = client.from(table).select(columns);
  if (order) q = q.order(order.col, { ascending: order.asc ?? true });
  const { data, error } = await q.limit(2000);
  if (error) throw new Error(`[data-supabase] ${table}: ${error.message}`);
  return (data ?? []) as T[];
}

export interface Itinerary {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  heroImage: string;
  duration: string;
  distance: string;
  difficulty: 'facile' | 'moyen' | 'difficile';
  region: string;
  startPoint: string;
  endPoint: string;
  elevation: string;
  roadType: string;
  bestSeason?: string;
  roadCondition?: string;
  highlights: string[];
  tips: string[];
  pointsOfInterest: { name: string; description?: string; image?: string; latitude?: number; longitude?: number }[];
  latitude?: number;
  longitude?: number;
}

export interface Accommodation {
  id: string;
  slug: string;
  name: string;
  type: 'hotel' | 'gite' | 'camping';
  description: string;
  location: string;
  region?: string;
  heroImage: string;
  priceRange: string;
  rating: number;
  amenities: string[];
  bikerAmenities: string[];
  contact?: { phone?: string; email?: string; website?: string };
  bookingLink?: string;
  affiliateLink?: string;
  address?: string;
  latitude?: number;
  longitude?: number;
  images?: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  authorName: string;
  authorAvatar?: string;
  authorBio?: string;
  publishedAt: string;
  isoDate: string;
  heroImage: string;
  readingTime: string;
  readingMinutes: number;
  tags: string[];
}

export interface GasStation {
  id: string;
  name: string;
  brand?: string;
  latitude: number;
  longitude: number;
  address?: string;
  region?: string;
  openingHours?: string;
  fuelTypes: string[];
  services: string[];
  strategic: boolean;
}

interface DbItinerary {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  full_description: string | null;
  hero_image: string | null;
  duration: string | null;
  distance: string | null;
  difficulty: 'facile' | 'moyen' | 'difficile' | null;
  region: string | null;
  start_point: string | null;
  end_point: string | null;
  elevation: string | null;
  road_type: string | null;
  best_season: string | null;
  road_condition: string | null;
  highlights: string[] | null;
  tips: string[] | null;
  latitude: number | null;
  longitude: number | null;
}

interface DbPoi {
  id: string;
  itinerary_id: string;
  name: string;
  description: string | null;
  image: string | null;
  latitude: number | null;
  longitude: number | null;
  order_idx: number;
}

const [itinerariesRows, poiRows, accomRows, blogRows, authorRows, gasRows] = await Promise.all([
  selectAll<DbItinerary>('itineraries', '*', { col: 'region' }),
  selectAll<DbPoi>('points_of_interest', '*', { col: 'order_idx', asc: true }),
  selectAll<any>('accommodations', '*', { col: 'name' }),
  selectAll<any>('blog_posts', '*', { col: 'published_at', asc: false }),
  selectAll<any>('authors', '*'),
  selectAll<any>('gas_stations', '*', { col: 'region' }),
]);

const poisByItinerary = new Map<string, DbPoi[]>();
for (const p of poiRows) {
  const list = poisByItinerary.get(p.itinerary_id) ?? [];
  list.push(p);
  poisByItinerary.set(p.itinerary_id, list);
}

const authorById = new Map<string, any>(authorRows.map((a) => [a.id, a]));

export const allItineraries: Itinerary[] = itinerariesRows.map((it) => ({
  id: it.id,
  slug: it.slug,
  title: it.title,
  description: it.description ?? '',
  fullDescription: it.full_description ?? '',
  heroImage: it.hero_image ?? '',
  duration: it.duration ?? '',
  distance: it.distance ?? '',
  difficulty: it.difficulty ?? 'moyen',
  region: it.region ?? '',
  startPoint: it.start_point ?? '',
  endPoint: it.end_point ?? '',
  elevation: it.elevation ?? '',
  roadType: it.road_type ?? '',
  bestSeason: it.best_season ?? undefined,
  roadCondition: it.road_condition ?? undefined,
  highlights: it.highlights ?? [],
  tips: it.tips ?? [],
  pointsOfInterest:
    (poisByItinerary.get(it.id) ?? []).map((p) => ({
      name: p.name,
      description: p.description ?? undefined,
      image: p.image ?? undefined,
      latitude: p.latitude ?? undefined,
      longitude: p.longitude ?? undefined,
    })),
  latitude: it.latitude ?? undefined,
  longitude: it.longitude ?? undefined,
}));

export const allAccommodations: Accommodation[] = accomRows.map((a: any) => ({
  id: a.id,
  slug: a.slug,
  name: a.name,
  type: a.type,
  description: a.description ?? '',
  location: a.location ?? '',
  region: a.region ?? undefined,
  heroImage: a.hero_image ?? '',
  priceRange: a.price_range ?? '',
  rating: typeof a.rating === 'number' ? a.rating : 0,
  amenities: a.amenities ?? [],
  bikerAmenities: a.biker_amenities ?? [],
  contact: {
    phone: a.contact_phone ?? undefined,
    email: a.contact_email ?? undefined,
    website: a.contact_website ?? undefined,
  },
  bookingLink: a.booking_link ?? undefined,
  affiliateLink: a.affiliate_link ?? undefined,
  address: a.address ?? undefined,
  latitude: a.latitude ?? undefined,
  longitude: a.longitude ?? undefined,
  images: a.images ?? [],
}));

export const allBlogPosts: BlogPost[] = blogRows.map((p: any) => {
  const author = p.author_id ? authorById.get(p.author_id) : null;
  return {
    id: p.id,
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt ?? '',
    content: p.content ?? '',
    category: p.category ?? 'général',
    authorName: author?.name ?? 'Corse à moto',
    authorAvatar: author?.avatar_url ?? undefined,
    authorBio: author?.bio ?? undefined,
    publishedAt: p.published_at
      ? new Date(p.published_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
      : '',
    isoDate: p.published_at ?? '',
    heroImage: p.hero_image ?? '',
    readingTime: p.reading_time ? `${p.reading_time} min` : '6 min',
    readingMinutes: p.reading_time ?? 6,
    tags: p.tags ?? [],
  };
});

export const allGasStations: GasStation[] = gasRows.map((g: any) => ({
  id: g.id,
  name: g.name,
  brand: g.brand ?? undefined,
  latitude: g.latitude,
  longitude: g.longitude,
  address: g.address ?? undefined,
  region: g.region ?? undefined,
  openingHours: g.opening_hours ?? undefined,
  fuelTypes: g.fuel_types ?? [],
  services: g.services ?? [],
  strategic: !!g.strategic,
}));

export function getItineraryBySlug(slug: string) {
  return allItineraries.find((it) => it.slug === slug);
}
export function getAccommodationBySlug(slug: string) {
  return allAccommodations.find((a) => a.slug === slug);
}
export function getBlogPostBySlug(slug: string) {
  return allBlogPosts.find((p) => p.slug === slug);
}
