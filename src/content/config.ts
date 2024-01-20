import { defineCollection, z } from "astro:content";

const notes = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    // Transform string to Date object
    date: z.coerce.date(),
  }),
});

export const collections = { notes };
