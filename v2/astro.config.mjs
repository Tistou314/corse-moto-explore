// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

const SITE_URL = process.env.PUBLIC_SITE_URL ?? 'https://corseamoto.com';

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
});
