import { defineMiddleware } from 'astro:middleware';

/**
 * Security middleware.
 *
 * The @astrojs/vercel adapter we ship (v8.x, blocked at this major because
 * v10 requires Astro 6 and @astrojs/tailwind doesn't support Astro 6 yet)
 * has a known CVE (GHSA-mr6q-rp88-fx84) where an attacker can override the
 * server-side path by sending an `x-astro-path` or `x_astro_path` header.
 *
 * We mitigate the attack vector at the request boundary by deleting these
 * headers before any route handler sees them. Effective even on the
 * vulnerable adapter version because the override only kicks in if the
 * header is present at routing time.
 *
 * Track the upstream fix and remove this once we can move to
 * @astrojs/vercel >= 10.0.2.
 */
const DANGEROUS_HEADERS = ['x-astro-path', 'x_astro_path'];

export const onRequest = defineMiddleware(async (context, next) => {
  // Prerendered pages have no real request at build time — touching
  // context.request.headers there only triggers Astro build warnings.
  if (!context.isPrerendered) {
    for (const header of DANGEROUS_HEADERS) {
      if (context.request.headers.has(header)) {
        context.request.headers.delete(header);
      }
    }
  }
  return next();
});
