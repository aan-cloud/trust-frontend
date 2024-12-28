import { z } from "zod";

export const dummySchema = z.object({
    id: z.number(),
    imageUrl: z.string(),
    name: z.string(),
    price: z.number(),
    rate: z.number()
});