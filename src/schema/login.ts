import { z } from "zod";
import { roles } from "./data";

export const loginResponseSchema = z.object({
    username: z.string(),
    accesToken: z.string(),
    refreshToken: z.string(),
    roles: z.array(roles)
})