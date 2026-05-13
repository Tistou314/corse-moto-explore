/**
 * Build-time data loader.
 *
 * Reads the legacy TS data files from ../src/data while Supabase is being
 * provisioned. Once Supabase is populated, swap the imports here for the
 * Supabase client without changing any consumer.
 */
import { itineraries as legacyItineraries } from '../../../src/data/itineraries';
import { accommodations as legacyAccommodations } from '../../../src/data/accommodations';
import { allGasStations as legacyGasStations } from '../../../src/data/gas-stations';
import { standardAuthor } from '../../../src/data/authors';
import { aspectsPratiquesArticles } from '../../../src/data/blog/aspects-pratiques';
import { aspectsTechniquesArticles } from '../../../src/data/blog/aspects-techniques';
import { cultureArticles } from '../../../src/data/blog/culture';
import { equipementArticles } from '../../../src/data/blog/equipement';
import { experiencesArticles } from '../../../src/data/blog/experiences';
import { saisonsArticles } from '../../../src/data/blog/saisons';
import { slugify } from './utils';

export interface PointOfInterest {
  name: string;
  description?: string;
  image?: string;
  latitude?: number;
  longitude?: number;
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
  pointsOfInterest: PointOfInterest[];
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

// ---- slug index to ensure uniqueness across the site ----
const claimed = new Map<string, Set<string>>();
function uniqSlug(scope: string, raw: string) {
  const base = slugify(raw) || 'item';
  const set = claimed.get(scope) ?? new Set<string>();
  let cand = base;
  let i = 2;
  while (set.has(cand)) cand = `${base}-${i++}`;
  set.add(cand);
  claimed.set(scope, set);
  return cand;
}

function normaliseItinerary(it: any): Itinerary {
  const slug = uniqSlug('itinerary', it.id ?? it.title);
  const pois = Array.isArray(it.pointsOfInterest)
    ? it.pointsOfInterest.map((p: any) =>
        typeof p === 'string' ? { name: p } : p,
      )
    : [];
  return {
    id: it.id,
    slug,
    title: it.title,
    description: it.description ?? '',
    fullDescription: it.fullDescription ?? '',
    heroImage: it.image ?? '',
    duration: it.duration ?? '',
    distance: typeof it.distance === 'number' ? `${it.distance} km` : String(it.distance ?? ''),
    difficulty: it.difficulty ?? 'moyen',
    region: it.region ?? '',
    startPoint: it.startPoint ?? '',
    endPoint: it.endPoint ?? '',
    elevation: it.elevation ?? '',
    roadType: it.roadType ?? '',
    bestSeason: it.bestSeason,
    roadCondition: it.roadCondition,
    highlights: it.highlights ?? [],
    tips: it.tips ?? [],
    pointsOfInterest: pois,
    latitude: it.latitude,
    longitude: it.longitude,
  };
}

function normaliseAccommodation(a: any): Accommodation {
  return {
    id: a.id,
    slug: uniqSlug('accommodation', a.id ?? a.name),
    name: a.name,
    type: a.type,
    description: a.description ?? '',
    location: a.location ?? '',
    region: a.region,
    heroImage: a.image ?? '',
    priceRange: a.priceRange ?? '',
    rating: typeof a.rating === 'number' ? a.rating : 0,
    amenities: a.amenities ?? [],
    bikerAmenities: a.bikerAmenities ?? [],
    contact: a.contact,
    bookingLink: a.bookingLink,
    affiliateLink: undefined,
    address: a.address,
    latitude: a.latitude,
    longitude: a.longitude,
  };
}

function parseReadingTime(rt: unknown): { display: string; minutes: number } {
  if (typeof rt === 'number') return { display: `${rt} min`, minutes: rt };
  if (typeof rt === 'string') {
    const m = rt.match(/\d+/);
    const n = m ? Number(m[0]) : 6;
    return { display: rt, minutes: n };
  }
  return { display: '6 min', minutes: 6 };
}

function normaliseBlogPost(p: any): BlogPost {
  const slug = uniqSlug('blog', p.slug ?? p.id ?? p.title);
  const rt = parseReadingTime(p.readingTime);
  const date = p.date ? new Date(p.date) : new Date();
  return {
    id: p.id,
    slug,
    title: p.title,
    excerpt: p.excerpt ?? '',
    content: p.content ?? '',
    category: p.category ?? 'général',
    authorName: p.author?.name ?? standardAuthor.name,
    authorAvatar: p.author?.avatar ?? standardAuthor.avatar,
    authorBio: p.author?.bio ?? standardAuthor.bio,
    publishedAt: p.date ?? '',
    isoDate: isNaN(date.getTime()) ? '' : date.toISOString(),
    heroImage: p.imageUrl ?? '',
    readingTime: rt.display,
    readingMinutes: rt.minutes,
    tags: p.tags ?? [],
  };
}

function normaliseGas(g: any): GasStation {
  return {
    id: g.id,
    name: g.name,
    brand: g.brand,
    latitude: g.latitude,
    longitude: g.longitude,
    address: g.address,
    region: g.region,
    openingHours: g.hours,
    fuelTypes: g.fuelTypes ?? [],
    services: g.services ?? [],
    strategic: !!g.isStrategic,
  };
}

export const allItineraries: Itinerary[] = (legacyItineraries as any[]).map(normaliseItinerary);
export const allAccommodations: Accommodation[] = (legacyAccommodations as any[]).map(
  normaliseAccommodation,
);
export const allBlogPosts: BlogPost[] = [
  ...aspectsPratiquesArticles,
  ...aspectsTechniquesArticles,
  ...cultureArticles,
  ...equipementArticles,
  ...experiencesArticles,
  ...saisonsArticles,
].map(normaliseBlogPost);
export const allGasStations: GasStation[] = (legacyGasStations as any[]).map(normaliseGas);

export function getItineraryBySlug(slug: string) {
  return allItineraries.find((it) => it.slug === slug);
}
export function getAccommodationBySlug(slug: string) {
  return allAccommodations.find((a) => a.slug === slug);
}
export function getBlogPostBySlug(slug: string) {
  return allBlogPosts.find((p) => p.slug === slug);
}
