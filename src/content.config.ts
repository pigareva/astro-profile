import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Static pages collection (home, impressum, datenschutz, imprint, privacy)
// Minimal schema — no heroImage or pubDate required for simple content pages.
const pagesCollection = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    lang: z.enum(['de', 'en']).optional().default('de'),
  }),
});

export const collections = {
  pages: pagesCollection,
};