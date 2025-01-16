'use client';

import { DynamicBreadcrumbs } from '../ui/dynamicBreadcrumbs';
import { z } from 'zod';
import { productDetailsSchema } from '@/schema/data';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { inserToCartSchema } from '@/schema/data';
import { Input } from '../ui/input';
import { Form, FormControl, FormField, FormItem } from '../ui/form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { useRouter } from 'next/navigation';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Cookies from 'js-cookie';
import { Button } from '../ui/button';
import { convertToTitleCase } from '@/lib/utils';
import { addToCart } from '@/server/dataFetchers';

export const ProductDetails = ({
  product,
}: {
  product: z.infer<typeof productDetailsSchema>
}) => {
  // const router = useRouter();

  const form = useForm<z.infer<typeof inserToCartSchema>>({
    resolver: zodResolver(inserToCartSchema),
    defaultValues: {
      quantity: 1,
    },
  });

  async function onSubmit(values: z.infer<typeof inserToCartSchema>) {
    const token = Cookies.get("accesToken");

    if (!token) {
      throw new Error("You're not authentication user")
    }

    await addToCart(product.id, token, values.quantity)

    // router.push("/cart")
  }

  return (
    <section className="flex flex-col gap-5 px-24">
      <DynamicBreadcrumbs />
      <div className="py-3 flex gap-24">
        <Carousel>
          <CarouselContent>
            {product.imageUrl.map((picture) => (
              <CarouselItem key={picture.id}>
                <Image
                  src={picture.imageUrl}
                  alt={picture.id}
                  width={460}
                  height={460}
                  className="rounded-xl"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10" />
          <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10" />
        </Carousel>
        <div
          className="flex flex-col justify-between flex-grow"
          id="details"
        >
          <div className="flex flex-col gap-5">
            <h1 className="font-sans font-black text-5xl">{product.name}</h1>
            <div
              className="flex gap-1 items-center"
              id="star"
            >
              {Array.from({ length: 5 }, (_, index) => index++).map((i) => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  key={i}
                  className="size-5 stroke-yellow-500 fill-yellow-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              ))}
              <small className="font-poppins">5/5.0</small>
            </div>
            <h2 className="mb-4 text-2xl font-bold font-sans text-primary">
              RM {product.price}
            </h2>
            <div className='flex gap-3 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 fill-primary ">
                <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
                <path fillRule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z" clipRule="evenodd" />
              </svg>
              <h1 className='font-sans text-xl font-bold'>{convertToTitleCase(product.user.userName)}</h1>
            </div>
            <div className="flex gap-3 mt-3 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 fill-primary">
                <path fillRule="evenodd" d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clipRule="evenodd" />
              </svg>
              <h1 className='items-center text-xl font-bold font-sans '>
                {convertToTitleCase(product.category.name)}
              </h1>
            </div>
          </div>
          <Form {...form}>
            <form
              className="flex gap-3"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormControl>
                      <Input
                        type="number"
                        name="quantity"
                        min={1}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        value={field.value}
                        className="w-20"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button
                className="w-full"
                type="submit"
              >
                Add to cart
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <div className="w-full mt-12">
        <Tabs defaultValue="product details">
          <TabsList className="flex justify-between bg-white">
            <TabsTrigger
              className="flex-grow font-semibold font-sans data-[state=active]:bg-primary data-[state=active]:text-white"
              value="product details"
            >
              Product Details
            </TabsTrigger>
            <TabsTrigger
              className="flex-grow font-semibold font-sans data-[state=active]:bg-primary data-[state=active]:text-white"
              value="rating and reviews"
            >
              Rating & Reviews
            </TabsTrigger>
            <TabsTrigger
              className="flex-grow font-semibold font-sans data-[state=active]:bg-primary data-[state=active]:text-white"
              value="faqs"
            >
              FAQs
            </TabsTrigger>
          </TabsList>
          <TabsContent
            className="text-center p-5"
            value="product details"
          >
            Product details section.
          </TabsContent>
          <TabsContent
            className="text-center p-5"
            value="rating and reviews"
          >
            Rating and reviews section
          </TabsContent>
          <TabsContent
            className="text-center p-5"
            value="faqs"
          >
            FAQs section
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
