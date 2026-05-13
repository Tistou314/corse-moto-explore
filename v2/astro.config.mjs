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
function aliasByImporter() {
  return {
    name: 'corseamoto:alias-by-importer',
    enforce: 'pre',
    resolveId(source, importer) {
      if (!source.startsWith('@/')) return null;
      const rel = source.slice(2);
      const fromLegacy = importer && importer.includes(`${sep}corse-moto-explore${sep}src${sep}`);
      const base = fromLegacy ? legacySrc : v2Src;
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
  },
});
