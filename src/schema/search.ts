import { z } from "zod";

export const searchSchema = z.object({
    value: z.string().max(120, "Too many word")
})