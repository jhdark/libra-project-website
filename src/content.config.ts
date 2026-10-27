import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Experiment guides: one Markdown file per experiment. The frontmatter drives
// cards and fact boxes; the body is the long-form guide.
const experiments = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/experiments' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    tagline: z.string(),
    summary: z.string(),
    status: z.enum(['completed', 'active', 'planned']),
    order: z.number(),
    facts: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    // GitHub repositories under github.com/LIBRA-project
    repos: z.array(z.object({ name: z.string(), description: z.string().optional() })).default([]),
    // A step on the scale-up path shown on the experiments page: breeder
    // volume in litres and a render from src/assets/stages/.
    stage: z.object({ volume: z.number(), image: image() }).optional(),
    // true while the text still needs review by the experiment lead
    needsReview: z.boolean().default(false),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { experiments, news };
