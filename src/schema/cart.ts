import { z } from "zod";
import { productSchema } from "./data";

const cartItemSchema = z.object({
    id: z.string(),
    productId: z.string(),
    quantity: z.number(),
    cartId: z.string(),
    product: productSchema
})

export const userCartSchema = z.object({
    totalPrice: z.number(),
    id: z.string(),
    userId: z.string(),
    items: z.array(cartItemSchema)
});