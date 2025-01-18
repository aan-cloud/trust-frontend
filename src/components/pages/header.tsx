'use client';

import { Button } from '../ui/button';
import { Form, FormControl, FormField, FormItem } from '../ui/form';
import { Input } from '../ui/input';
import Cookies from 'js-cookie'
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { searchSchema } from '@/schema/search';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigations } from '../../../data';
import { useEffect, useState } from 'react';
import { refreshAccesToken } from '@/server/dataFetchers';

export const Header = () => {

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    async function getAccessToken() {
      const accesToken = Cookies.get("accesToken");
      const refreshToken = Cookies.get("refreshToken");

      if(refreshToken) {
        if (!accesToken) {
          await refreshAccesToken(refreshToken);

          setIsAuth(true);
        } else {
          setIsAuth(true);
        }
      } else {
        setIsAuth(false)
      }
    }

    getAccessToken();
  })

  const pathName = usePathname();

  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      value: '',
    },
  });

  function onSubmit(values: z.infer<typeof searchSchema>) {
    console.log(values);
  }

  return (
    <header className="sticky top-0 bg-white bg-opacity-30 backdrop-blur-sm transition-all duration-300 shadow-sm z-10 px-24 p-4 flex justify-between items-center">
      <Link
        href={'/'}
        className="font-sans text-4xl font-black uppercase text-primary"
      >
        trust.
      </Link>
      <NavLinks />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-x-4 flex justify-between w-[40%]"
        >
          <FormField
            control={form.control}
            name="value"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormControl>
                  <Input
                    placeholder="Search"
                    {...field}
                  ></Input>
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </Button>
        </form>
      </Form>
      <div
        className="flex gap-4 ml-28"
        id="logo"
      >
        {
          isAuth ? (
            <>
              <Link href={"/wishList"}>
              <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
              </Link>
        <Link href={"/cart"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        </Link>
        <Link href={"/profile"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
        </Link>
            </>
          ) : (
            <Link
          href={"/register"}
          className={clsx(
            'hover:bg-primary rounded-sm hover:text-white py-2 px-2 font-poppins',
            {
              'bg-primary text-white': pathName === "/register" || pathName === "/login",
            }
          )}
        >
          Register / Login
        </Link>
          )
        }
      </div>
    </header>
  );
};

const NavLinks = () => {
  const pathName = usePathname();

  return (
    <div className="flex gap-2 font-sans font-medium">
      {navigations.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            'hover:bg-primary rounded-sm hover:text-white py-2 px-2 font-poppins',
            {
              'bg-primary text-white': pathName === link.href,
            }
          )}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};
