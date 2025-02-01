import { z } from "zod";

export const sellerRegistrationschema = z.object({
    userId: z.string(),
    switchToRole: z.string(),
    description: z.string(),
    avatarUrl: z.string()
});