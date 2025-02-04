import { z } from "zod";

export const sellerSchema = z.object({
    id: z.string(),
    userName: z.string(),
    email: z.string().email(),
    description: z.string(),
    avatarUrl: z.string(),
});