import { z } from 'zod';

const imageSchema = z.object({
  id: z.string(),
  imageUrl: z.string(),
  productId: z.string(),
});

export const dataSchema = z.object({
  id: z.string(),
  description: z.string(),
  imageUrl: z.array(imageSchema),
  name: z.string(),
  price: z.number(),
  stock: z.number(),
  slug: z.string(),
  rate: z.number(),
});

const imageUrls = z.object({
  id: z.string(),
  imageUrl: z.string(),
  productId: z.string(),
});

export const productDetailsSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  imageUrl: z.array(imageUrls),
  price: z.number(),
  slug: z.string(),
  stock: z.number(),
});

export const breadcrumbSchema = z.object({
  label: z.string(),
  href: z.string(),
  isCurrentPage: z.boolean(),
});

export const filterSchema = z.object({
  price: z.number(),
  category: z.string(),
});

export const inserToCartSchema = z.object({
  quantity: z.number(),
  productId: z.string(),
});
