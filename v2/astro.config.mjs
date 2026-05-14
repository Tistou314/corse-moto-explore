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

const SITE_URL = process.env.PUBLIC_SITE_URL ?? 'https://corseamoto.com';

/**
 * Vite plugin that resolves `@/...` differently depending on whether the
 * importer is a v2 file (→ v2/src) or a legacy file (→ ../src). Lets us
 * read the legacy data modules untouched at build time.
 */
const v2InternalLinking = pathResolve(__dirname, 'src/lib/internal-linking-v2.ts');

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
  adapter: vercel({
    webAnalytics: { enabled: false },
    imageService: true,
  }),
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) => !page.includes('/admin'),
      changefreq: 'weekly',
      priority: 0.7,
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
  },
});
