import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const insightsSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishDate: z.date(),
  draft: z.boolean().default(false),
});

const insightsAr = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights-ar' }),
  schema: insightsSchema,
});

const insightsEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights-en' }),
  schema: insightsSchema,
});

export const collections = {
  'insights-ar': insightsAr,
  'insights-en': insightsEn,
};
