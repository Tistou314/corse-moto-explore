/**
 * Server-only helper to call SerpAPI for accommodation enrichment.
 * Use only from admin endpoints — never expose SERPAPI_KEY to the browser.
 */

export interface SerpImage {
  url: string;
  thumbnail: string;
  title?: string;
  source?: string;
}

export interface SerpEnrichment {
  images: SerpImage[];
  website?: string;
  phone?: string;
  rating?: number;
  address?: string;
}

export async function searchImages(query: string, limit = 8): Promise<SerpImage[]> {
  const key = process.env.SERPAPI_KEY;
  if (!key) throw new Error('SERPAPI_KEY missing');
  const url = new URL('https://serpapi.com/search.json');
  url.searchParams.set('engine', 'google_images');
  url.searchParams.set('q', query);
  url.searchParams.set('gl', 'fr');
  url.searchParams.set('hl', 'fr');
  url.searchParams.set('num', String(limit));
  url.searchParams.set('api_key', key);
  const r = await fetch(url.toString());
  if (!r.ok) throw new Error(`SerpAPI ${r.status}`);
  const data = (await r.json()) as { images_results?: Array<Record<string, string>> };
  return (data.images_results ?? []).slice(0, limit).map((it) => ({
    url: it.original ?? it.link ?? '',
    thumbnail: it.thumbnail ?? '',
    title: it.title,
    source: it.source,
  }));
}

export async function searchPlace(query: string): Promise<SerpEnrichment> {
  const key = process.env.SERPAPI_KEY;
  if (!key) throw new Error('SERPAPI_KEY missing');
  const url = new URL('https://serpapi.com/search.json');
  url.searchParams.set('engine', 'google');
  url.searchParams.set('q', query);
  url.searchParams.set('gl', 'fr');
  url.searchParams.set('hl', 'fr');
  url.searchParams.set('api_key', key);
  const r = await fetch(url.toString());
  if (!r.ok) throw new Error(`SerpAPI ${r.status}`);
  const data = (await r.json()) as Record<string, unknown>;
  const kg = (data.knowledge_graph as Record<string, unknown> | undefined) ?? {};
  const images = ((data.inline_images as Array<Record<string, string>>) ?? []).slice(0, 6).map((it) => ({
    url: it.original ?? it.source ?? '',
    thumbnail: it.thumbnail ?? '',
    title: it.title,
    source: it.source,
  }));
  return {
    images,
    website: kg.website as string | undefined,
    phone: kg.phone as string | undefined,
    rating: typeof kg.rating === 'number' ? (kg.rating as number) : undefined,
    address: kg.address as string | undefined,
  };
}
