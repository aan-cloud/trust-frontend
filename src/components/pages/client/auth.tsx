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
import { authSchema } from '@/schema/register';
import { authFetch } from '@/requests/auth';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

interface AuthPageProps {
  page: 'login' | 'register';
}

export const AuthPage: React.FC<AuthPageProps> = ({ page }) => {
  const router = useRouter();
  const isRegister = page === 'register';

  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      username: '',
      ...(isRegister ? { email: '' } : {}),
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof authSchema>) {
    await authFetch({
      username: values.username,
      ...(isRegister ? { email: values.email } : {}),
      password: values.password,
    }, page);

    if (isRegister) {
      router.push("/login")
    } else {
      router.push("/")
    }
  }

  return (
    <section className="flex justify-center items-center pt-8 py-20">
      <div className="flex flex-col items-left min-w-[30%] px-7 py-6 border-border border-2 rounded-md shadow-md bg-white">
        <h1 className="font-normal text-xl font-sans mb-6">
          {isRegister ? 'Register new account' : 'Login to your account'}
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
                      placeholder="Enter your username"
                      {...field}
                    ></Input>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {isRegister && (
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        {...field}
                      ></Input>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      className="border ring-primary"
                      placeholder="Enter your password"
                      type='password'
                      {...field}
                    ></Input>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <small>
                {isRegister ? "Already have an account? " : "Don't have an account? "}
              </small>
              <Link
                href={isRegister ? "/login" : "/register"}
                className="text-sm text-blue-800 underline"
              >
                {isRegister ? 'Login' : 'Register'}
              </Link>
            </div>
            <Button
              type="submit"
              className="bg-primary"
            >
              {isRegister ? 'Register' : 'Login'}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

