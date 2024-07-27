import { defineCollection, z } from "astro:content";

// Pages collection schema
const pagesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
    header_alt: z.boolean().optional(),
    page: z.string().optional(),
  }),
});

// Export collections
export const collections = {
  "regular-pages": pagesCollection,
};
