'use client';
import Link from 'next/link';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { UseFormReturn } from 'react-hook-form';

import { z } from 'zod';
import { registerSchema } from '@/schema/register';

interface RegisterPageProps {
  form: UseFormReturn<z.infer<typeof registerSchema>>;
  onSubmit: (values: z.infer<typeof registerSchema>) => void;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({
  form,
  onSubmit,
}) => {
  return (
    <section className="flex justify-center items-center pt-8 py-20">
      <div className="flex flex-col items-left min-w-[30%] px-7 py-6 border-border border-2 rounded-md shadow-md bg-white">
        <h1 className="font-normal text-xl font-sans mb-6">
          Register new account
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 w-full flex flex-col"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="shadcn"
                      {...field}
                    ></Input>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="shadcn"
                      {...field}
                    ></Input>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      className="border ring-primary"
                      placeholder="shadcn"
                      {...field}
                    ></Input>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <small>You already have an account? </small>
              <Link
                href={'/login'}
                className="text-sm text-blue-800 underline"
              >
                Login
              </Link>
            </div>
            <Button
              type="submit"
              className="bg-primary"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};
