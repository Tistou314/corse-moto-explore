import type { APIRoute } from 'astro';
import { searchPlace } from '@/lib/serpapi';

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  const q = url.searchParams.get('q');
  if (!q) {
    return new Response(JSON.stringify({ error: 'missing q' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }
  try {
    const data = await searchPlace(q);
    return new Response(JSON.stringify(data), {
      headers: { 'content-type': 'application/json', 'cache-control': 'private, max-age=300' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }
};
