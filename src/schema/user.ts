import { z } from "zod";

const userRoles = z.object({
    role: z.object({
        roleName: z.string()
    })
});

const user = z.object({
    roles: z.array(userRoles),
    userName: z.string(),
    avatarUrl: z.string().optional(),
    email: z.string(),
    id: z.string()
});

export const userProfile = z.object({
    message: z.string(),
    user: user,
});