import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nawa.systems',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'ar',
        locales: { ar: 'ar', en: 'en' },
      },
    }),
  ],
  // Prerendered pages are served by the Node adapter's static file layer,
  // which canonicalizes to no trailing slash regardless of this setting
  // (Astro only governs dev server + on-demand routes for this option).
  // Kept 'never' so local dev matches the production static-serving reality.
  trailingSlash: 'never',
  adapter: node({ mode: 'standalone' }),
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  build: {
    format: 'directory',
  },
});
