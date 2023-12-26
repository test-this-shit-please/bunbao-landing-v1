// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
import bunbaoConfig from '~/bunbao.config';

// 2. Define your collection(s)
const blog = defineCollection({
	schema: z.object({
		draft: z.boolean(),
		title: z.string(),
		snippet: z.string(),
		image: z.object({
			src: z.string(),
			alt: z.string(),
		}),
		publishDate: z.string().transform(str => new Date(str)),
		author: z.string().default(bunbaoConfig),
		category: z.string(),
		tags: z.array(z.string()),
	}),
});

const team = defineCollection({
	schema: z.object({
		draft: z.boolean(),
		name: z.string(),
		title: z.string(),
		avatar: z.object({
			src: z.string(),
			alt: z.string(),
		}),
		publishDate: z.string().transform(str => new Date(str)),
	}),
});

const updates = defineCollection({
	schema: z.object({
		draft: z.boolean(),
		title: z.string(),
		description: z.string(),
		icon: z.string(),
		logo: z.string(),
		publishedAt: z.string().transform(str => new Date(str)),
	}),
});

const jobs = defineCollection({
	schema: z.object({
		title: z.string(),
		company: z.string()
	}),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
	'blog': blog,
	'team': team,
	'updates': updates,
	'jobs': jobs
};