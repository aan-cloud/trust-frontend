import { z } from 'zod';

const imageSchema = z.object({
  id: z.string(),
  imageUrl: z.string(),
  productId: z.string(),
});

export const productSchema = z.object({
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

export const roles = z.object({
  roleId: z.string(),
  userId: z.string(),
  id: z.string()
});

const ratings = z.object({
  rate: z.number()
});

export const productDetailsSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  imageUrl: z.array(imageUrls),
  price: z.number(),
  user: z.object({
    userName: z.string(),
    description: z.string(),
    roles: z.array(roles)
  }),
  category: z.object({
    name: z.string()
  }),
  ratings: z.array(ratings),
  slug: z.string(),
  stock: z.number(),
});

export const breadcrumbSchema = z.object({
  label: z.string(),
  href: z.string(),
  isCurrentPage: z.boolean(),
});

export const filterSchema = z.object({
  price: z.object({
    lt: z.number().optional()
  }).nullable().optional(),
  category: z.object({
    name: z.string().optional()
  }).nullable().optional(),
  publish: z.boolean()
});

export const formFilterSchema = z.object({
  price: z.number().optional(),
  category: z.string().optional(),
  // publish: z.boolean()
})

export const inserToCartSchema = z.object({
  quantity: z.number(),
});

const images = z.object({
  imageUrl: z.string()
})

export const newProductSchema = z.object({
  name: z.string().min(5, 'Minimum 5 character!'),
  imageUrl: z.array(images),
  description:z.string().min(20, 'Minimun 20 Character!'),
  price: z.number(),
  stock: z.number(),
  category: z.enum(["tire", "brake", "steering", "lamp", "gearbox"]),
});

export const productDashboardSchema = z.object({
  categoryId: z.string(),
  description: z.string(),
  imageUrl: z.array(images),
  id: z.string(),
  name: z.string(),
  price: z.number(),
  publish: z.boolean(),
  slug: z.string(),
  stock: z.number(),
  userId: z.string(),
});

export const allProductInDashboard = z.array(productDashboardSchema);