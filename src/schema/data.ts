import { z } from 'zod';

const imageSchema = z.object({
  id: z.string(),
  imageUrl: z.string(),
  productId: z.string(),
});

export const dataSchema = z.object({
  id: z.number(),
  description: z.string(),
  imageUrl: z.array(imageSchema),
  name: z.string(),
  price: z.number(),
  stock: z.number(),
  slug: z.string(),
  rate: z.number(),
});
