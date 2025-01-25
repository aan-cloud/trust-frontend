import { z } from "zod";
import { roles } from "./data";

export const loginResponseSchema = z.object({
    userName: z.string(),
    accesToken: z.string(),
    refreshToken: z.string(),
    roles: z.array(roles)
});

export const logOutSchema = z.object({
    isLogedOUt: z.boolean()
});