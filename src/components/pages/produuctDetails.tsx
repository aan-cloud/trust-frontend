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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '../ui/button';

export const ProductDetails = ({
  product,
}: {
  product: z.infer<typeof productDetailsSchema>;
}) => {
  const form = useForm<z.infer<typeof inserToCartSchema>>({
    resolver: zodResolver(inserToCartSchema),
    defaultValues: {
      quantity: 1,
      productId: '',
    },
  });

  function onSubmit(values: z.infer<typeof inserToCartSchema>) {
    console.log(values);
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
            <small className="text-sm font-thin text-stone-500 font-poppins">
              {product.description}
            </small>
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
              <FormField
                control={form.control}
                name="productId"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="hidden"
                        name="productId"
                        value={product.id}
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
