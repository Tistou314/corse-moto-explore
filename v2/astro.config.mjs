// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { fileURLToPath } from 'node:url';
import { dirname, resolve as pathResolve, sep } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const v2Src = pathResolve(__dirname, 'src');
const legacySrc = pathResolve(__dirname, '..', 'src');

const SITE_URL = process.env.PUBLIC_SITE_URL ?? 'https://www.corseamoto.com';

/**
 * Vite plugin that resolves `@/...` differently depending on whether the
 * importer is a v2 file (→ v2/src) or a legacy file (→ ../src). Lets us
 * read the legacy data modules untouched at build time.
 */
const v2InternalLinking = pathResolve(__dirname, 'src/lib/internal-linking-v2.ts');
const v2OptimizedImage = pathResolve(__dirname, 'src/components/legacy-overrides/optimized-image.tsx');
const v2AccommodationCard = pathResolve(
  __dirname,
  'src/components/legacy-overrides/AccommodationCard.tsx',
);
const v2BlogPostCard = pathResolve(__dirname, 'src/components/legacy-overrides/BlogPostCard.tsx');

function aliasByImporter() {
  return {
    name: 'corseamoto:alias-by-importer',
    enforce: 'pre',
    resolveId(source, importer) {
      // Force the v2 internal-linking implementation everywhere so the
      // legacy markdown renderer cannot inject /blog/<slug> links to
      // posts that don't exist in the v2 dataset. Catches both the
      // alias form (@/utils/markdown/internalLinking) and the relative
      // form (./internalLinking) used by legacy markdownFormatter.
      if (
        source === '@/utils/markdown/internalLinking' ||
        (source === './internalLinking' &&
          importer?.includes(`${sep}src${sep}utils${sep}markdown${sep}`))
      ) {
        return this.resolve(v2InternalLinking, importer, { skipSelf: true });
      }
      // Force the v2 OptimizedImage override. The legacy version starts
      // with opacity-0 and waits for onLoad to fade in — pattern broken
      // by SSG/SSR because the onLoad event sometimes fails to fire
      // after hydration on already-cached images. Result: invisible
      // images in blog cards, accommodation cards, etc.
      if (source === '@/components/ui/optimized-image') {
        return this.resolve(v2OptimizedImage, importer, { skipSelf: true });
      }
      // Force the v2 accommodation card. The legacy one navigates from an
      // onClick handler instead of an anchor, which leaves all 26
      // accommodation pages without a single crawlable inbound link.
      if (source === '@/components/AccommodationCard') {
        return this.resolve(v2AccommodationCard, importer, { skipSelf: true });
      }
      // Force the v2 blog card. The legacy category badge uses colours that
      // fail AA against its white text, one of which (`bg-corsica-sage`) is
      // not even in the token set, so it rendered white on white.
      if (source === '@/components/BlogPostCard') {
        return this.resolve(v2BlogPostCard, importer, { skipSelf: true });
      }
      if (!source.startsWith('@/')) return null;
      const rel = source.slice(2);
      const fromV2 = importer ? importer.includes(`${sep}v2${sep}src${sep}`) : true;
      const base = fromV2 ? v2Src : legacySrc;
      return this.resolve(pathResolve(base, rel), importer, { skipSelf: true });
    },
  };
}

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  // Production canonicals and the live URLs are already slash-less
  // (e.g. /itineraires/foo). Tell Astro and the sitemap integration to
  // match, so canonical / og:url / sitemap entries never disagree on
  // the trailing slash — Google treats that disagreement as a quality
  // signal worth de-prioritising.
  trailingSlash: 'never',
  // Legacy SPA route that never existed in v2 — send old bookmarks and any
  // residual index entries to the equivalent page instead of a 404.
  redirects: {
    '/gas-stations': '/stations-service',
  },
  adapter: vercel({
    webAnalytics: { enabled: false },
    imageService: true,
  }),
  // Keep inlining. Measured both ways: as an external file the stylesheet
  // becomes a render-blocking round trip and costs ~2s of LCP on 4G
  // (home 94 -> 78), which outweighs losing cross-page caching. The right
  // lever is the stylesheet's size, not its location — see the content
  // globs in tailwind.config.ts.
  build: { inlineStylesheets: 'always' },
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) => !page.includes('/admin'),
      changefreq: 'weekly',
      priority: 0.7,
      // No `lastmod`: stamping every URL with the build date claims the
      // whole site changed on every deploy. Google detects unreliable
      // lastmod values and then ignores them entirely — worse than
      // omitting the field.
    }),
  ],
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  vite: {
    configFile: false,
    cacheDir: pathResolve(__dirname, 'node_modules/.vite'),
    plugins: [aliasByImporter()],
    resolve: {
      alias: [
        {
          find: /^react-router-dom$/,
          replacement: pathResolve(__dirname, 'src/lib/router-shim.tsx'),
        },
        {
          find: /^react-helmet$/,
          replacement: pathResolve(__dirname, 'src/lib/helmet-shim.tsx'),
        },
      ],
    },
    build: {
      rollupOptions: {
        output: {
          // The legacy components pull one lucide icon per file, which
          // Vite otherwise emits as ~20 tiny separate chunks. Bundle them
          // into a single cached request.
          manualChunks(id) {
            if (id.includes('node_modules/lucide-react')) return 'lucide';
            return undefined;
          },
        },
      },
    },
  },
});
