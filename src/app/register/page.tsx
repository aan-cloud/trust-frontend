'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { AuthPage } from '@/components/pages/auth';
import { z } from 'zod';
import { authSchema } from '@/schema/register';
import { authFetch } from '@/server/dataFetchers';

export default function Register() {

  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      username: 'John Doe',
      email: 'johdoe@mail.com',
      password: 'some characters',
    },
  });

  function onSubmit(values: z.infer<typeof authSchema>) {
      authFetch({
        username: values.username,
        email: values.email,
        password: values.password,
      }, "register");
  }

  return (
    <AuthPage
      form={form}
      onSubmit={onSubmit}
      page={"register"}
    />
  );
}
