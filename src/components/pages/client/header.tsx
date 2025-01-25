'use client';

import { Button } from '../../ui/button';
import { Form, FormControl, FormField, FormItem } from '../../ui/form';
import { Input } from '../../ui/input';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { searchSchema } from '@/schema/search';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigations } from '../../../../data';
import { useRouter } from 'next/navigation';
import { UserCart } from '@/components/ui/userCard';
import { useAuth } from '@/hooks/use-auth';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuthContext } from '@/context/authContext';
import { useState, useEffect } from 'react';

export const Header = () => {

  const { userName } = useAuthContext();
  const [isOpenNav, setIsOpenNav] = useState(false);
  const router = useRouter();
  const {isAuth, boxRef, isOpen, setIsOpen} = useAuth();
  const pathName = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsOpenNav(true);
      } else {
        setIsOpenNav(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      value: '',
    },
  });

  function onSubmit(values: z.infer<typeof searchSchema>) {
    console.log(values);
    const queryString = new URLSearchParams(values).toString();
    router.push(`/products?${queryString}`)
  };

  const handleNavLinkClick = () => {
    if (window.innerWidth < 640) { // 640px adalah breakpoint sm di Tailwind
      setIsOpenNav(false); // Tutup isOpenNav hanya pada layar kecil
    }
  };

  return (
    <header className="sticky bg-white bg-opacity-30 backdrop-blur-sm transition-all duration-300 top-0 shadow-sm z-10 px-4 sm:px-24 p-4 flex justify-between items-center">
      <Link
        href={'/'}
        onClick={handleNavLinkClick}
        className="font-sans text-4xl font-black uppercase text-primary"
      >
        trust.
      </Link>
      <svg onClick={() => setIsOpenNav(!isOpenNav)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 sm:hidden">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      <div className={clsx("w-screen h-screen sm:h-fit fixed justify-end sm:static top-14 bg-muted right-0 z-50 shadow-xl flex flex-col-reverse gap-4 py-5 sm:py-0 sm:w-fit sm:flex-row sm:flex-grow sm:shadow-none sm:items-center sm:bg-transparent sm:transition-all sm:duration-300 sm:justify-between",
        {
          'flex': isOpenNav,
          'hidden': !isOpenNav
        }
      )} id="nav">
      <NavLinks isOpenNav handleNavLinkClick={handleNavLinkClick}/>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="sm:space-x-4 px-4 flex justify-between sm:w-[45%]"
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
                    onChange={(e) => {
                      field.onChange(e);
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" onClick={handleNavLinkClick}>
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
        className="flex flex-row-reverse sm:flex-grow sm:flex-row px-4 sm:mt-0 sm:px-0 justify-between items-center"
        id="logo"
      >
        {
          isAuth ? (
            <>
              <Link href={"/wishList"} onClick={handleNavLinkClick}>
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
        <Link href={"/cart"} onClick={handleNavLinkClick}>
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
        <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex gap-2 items-center'>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className='flex items-center gap-1 select-none'>
              <h2 className='font-sans'>Hi,</h2> 
              <h2 className='font-semibold font-sans'>{userName}</h2>
            </div>
            <UserCart isOpen={isOpen} handleNavLinkClick={handleNavLinkClick} ref={boxRef}/>
        </div>
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
      </div>
    </header>
  );
};

const NavLinks = ({ isOpenNav, handleNavLinkClick }: {isOpenNav: boolean, handleNavLinkClick: () => void}) => {
  const pathName = usePathname();

  return (
    <div className={clsx("flex flex-col sm:flex-row gap-2 justify-between px-4 font-sans font-medium",
      {
        'hidden': !isOpenNav, // Sembunyikan navigasi pada layar kecil jika isOpenNav false
        'flex': isOpenNav, // Tampilkan navigasi pada layar kecil jika isOpenNav true
      }
    )}   
    >
      {navigations.map((link) => (
        <Link
          onClick={handleNavLinkClick}
          key={link.name}
          href={link.href}
          className={clsx(
            'hover:bg-primary w-full sm:w-fit rounded-sm hover:text-white py-2 px-2 font-poppins',
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
