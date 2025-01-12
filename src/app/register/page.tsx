'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { RegisterPage } from '@/components/pages/register';
import { z } from 'zod';
// import Cookies from 'js-cookie'
import 'dotenv/config';
import { registerSchema } from '@/schema/register';
import { toast } from 'sonner';

export default function Register() {

  async function registerFetch(userData: z.infer<typeof registerSchema>) {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/register`;
    console.log(userData)

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData)
      });

      if(!response.ok) {
        toast(`Registration failed`, {
          description: new Date().toISOString().split('T')[0],
          action: { label: 'Close', onClick: () => '' },
        });
        throw new Error(`Data incorrect! ${response.statusText}`)
      } 
      
      const registrationData = await response.json();

      toast(`Registrattion ${registrationData.userName} successfull`, {
        description: new Date().toISOString().split('T')[0],
        action: { label: 'Close', onClick: () => '' },
      });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: Error | any) {
      throw new Error(`${error.message}`)
    }

      // Cookies.set("access token", token.accessToken, { expires: 15/1400, path: ""})
      // Cookies.set("access token", token., { expires: 15/1400, path: ""})

  }

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: 'John Doe',
      email: 'johdoe@mail.com',
      password: 'some characters',
    },
  });

  function onSubmit(values: z.infer<typeof registerSchema>) {
    registerFetch({
      username: values.username,
      email: values.email,
      password: values.password,
    })
  }

  return (
    <RegisterPage
      form={form}
      onSubmit={onSubmit}
    />
  );
}
