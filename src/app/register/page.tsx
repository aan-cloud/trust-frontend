"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterPage } from "@/components/pages/register";
import { z } from "zod";
import { registerSchema } from "@/schema/register";

export default function Register() {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      userName: "John Doe",
      email: "johdoe@mail.com",
      password: "some characters",
    },
  });

  function onSubmit(values: z.infer<typeof registerSchema>) {
    // This is for fetching
    console.log(values);
  }

  return <RegisterPage form={form} onSubmit={onSubmit} />;
}
