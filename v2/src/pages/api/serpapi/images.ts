import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';
import { searchImages } from '@/lib/serpapi';

export const prerender = false;

const SUPABASE_URL = import.meta.env.PUBLIC_SUPABASE_URL;
const SUPABASE_KEY =
  import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

export const GET: APIRoute = async ({ url, request }) => {
  const authHeader = request.headers.get('authorization') ?? '';
  const token = authHeader.toLowerCase().startsWith('bearer ') ? authHeader.slice(7).trim() : '';
  if (!token || !SUPABASE_URL || !SUPABASE_KEY) {
    return json({ error: 'unauthenticated' }, 401);
  }
  const client = createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { data, error } = await client.auth.getUser(token);
  if (error || !data?.user) return json({ error: 'invalid_session' }, 401);

  const q = url.searchParams.get('q');
  if (!q) return json({ error: 'missing q' }, 400);
  try {
    const images = await searchImages(q, 12);
    return json({ images });
  } catch (err) {
    return json({ error: (err as Error).message }, 500);
  }
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}
