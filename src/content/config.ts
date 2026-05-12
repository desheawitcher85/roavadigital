import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('DeShea Witcher'),
    tags: z.array(z.string()).default([]),
    readTime: z.number(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
