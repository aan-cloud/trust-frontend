'use client';
import { z } from 'zod';

export const authSchema = z.object({
  username: z.string().min(4, 'Username must be contain at least 4 characters'),
  email: z.string().email('Input the correct email').optional(),
  password: z.string().min(5, 'Psssword contain at least 5 characters'),
});
