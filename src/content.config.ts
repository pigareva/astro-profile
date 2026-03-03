import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pagesCollection = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content',
  }),
  schema:  ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.object({
      url: image(),
      alt: z.string(),
    }),
    tags: z.array(z.string()).optional(),
    isDraft: z.boolean(),
    lang: z.enum(['fr', 'en']).optional().default('fr'),
  }),
});

export const collections = {
  pages: pagesCollection,
};