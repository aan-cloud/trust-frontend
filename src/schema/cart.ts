import { z } from "zod";
import { dataSchema } from "./data";

const cartItemSchema = z.object({
    id: z.string(),
    productId: z.string(),
    quantity: z.number(),
    cartId: z.string(),
    product: dataSchema
})

export const userCartSchema = z.object({
    id: z.string(),
    userId: z.string(),
    items: z.array(cartItemSchema)
});