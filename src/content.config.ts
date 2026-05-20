import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			category: z.enum(['institute', 'vibelog', 'research', 'brief']).default('vibelog'),
			lang: z.enum(['en', 'zh']).default('en'),
			private: z.boolean().optional().default(false),
		}),
});

export const collections = { blog };
