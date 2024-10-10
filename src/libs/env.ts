import {z} from "zod"

const envSchema = z.object({
    VITE_BACKEND_URL: z.string(),
    VITE_ACCESS_TOKEN_NAME: z.string().optional()
});

export const ENV = envSchema.parse(import.meta.env);

export const BACKEND_API_URL = ENV.VITE_BACKEND_URL;
export const ACCESS_TOKEN_NAME = ENV.VITE_ACCESS_TOKEN_NAME;