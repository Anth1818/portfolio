import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
    loader: glob({pattern: '**/[^_]*.md', base: "./src/data/projects"}),
    schema: z.object({
        title: z.string(),
        images: z.array(z.string()),
        techStack: z.array(z.string()),
        note: z.string(),
        github: z.string().url(),
        slug: z.string(),
        id: z.string()
    }),
});

export const collections = {
    projects,
};