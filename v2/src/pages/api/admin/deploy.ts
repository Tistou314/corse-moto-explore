import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

export const prerender = false;

const SUPABASE_URL = import.meta.env.PUBLIC_SUPABASE_URL;
const SUPABASE_KEY =
  import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
const DEPLOY_HOOK_URL = process.env.VERCEL_DEPLOY_HOOK_URL;

export const POST: APIRoute = async ({ request }) => {
  if (!DEPLOY_HOOK_URL) {
    return new Response(JSON.stringify({ ok: false, reason: 'no_hook_configured' }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  }

  const authHeader = request.headers.get('authorization') ?? '';
  const token = authHeader.toLowerCase().startsWith('bearer ')
    ? authHeader.slice(7).trim()
    : '';
  if (!token || !SUPABASE_URL || !SUPABASE_KEY) {
    return new Response(JSON.stringify({ ok: false, reason: 'unauthenticated' }), {
      status: 401,
      headers: { 'content-type': 'application/json' },
    });
  }

  const client = createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: { headers: { Authorization: `Bearer ${token}` } },
  });
  const { data, error } = await client.auth.getUser(token);
  if (error || !data?.user) {
    return new Response(JSON.stringify({ ok: false, reason: 'invalid_session' }), {
      status: 401,
      headers: { 'content-type': 'application/json' },
    });
  }

  try {
    const res = await fetch(DEPLOY_HOOK_URL, { method: 'POST' });
    return new Response(JSON.stringify({ ok: res.ok, status: res.status }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, reason: (err as Error).message }), {
      status: 502,
      headers: { 'content-type': 'application/json' },
    });
  }
};
