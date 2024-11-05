import {z} from "zod"

export const userRegister = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string()
});

export const userLogin = z.object({
    email: z.string().email(),
    password: z.string()
});

export type UserRegister = z.infer<typeof userRegister>
export type UserLogin = z.infer<typeof userLogin>