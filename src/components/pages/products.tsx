'use client';

import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { DynamicBreadcrumbs } from '../ui/dynamicBreadcrumbs';
import { Slider } from '@/components/ui/slider';
import { Button } from '../ui/button';
import 'dotenv/config';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { UseFormReturn } from 'react-hook-form';
import { filterSchema } from '@/schema/data';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useEffect } from 'react';
import { CardProduct } from '../ui/cardProduct';
import { dataSchema } from '@/schema/data';
import { toast } from 'sonner';

export const ProductsList = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState<{ category?: string; price?: number }>(
    {}
  );

  useEffect(() => {
    async function fetchData() {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;

      const params = new URLSearchParams({
        filter: JSON.stringify(filter),
      });

      const url = `${baseUrl}/products?${params}`;

      try {
        const response = await fetch(url);

        if (!response.ok) {
          toast('Failed applying the filter', {
            description: new Date().toISOString().split('T')[0],
            action: { label: 'Close', onClick: () => '' },
          });
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
        setData(json);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: Error | any) {
        console.log(error.message);
      }
    }

    fetchData();
  }, [filter]);

  const form = useForm<z.infer<typeof filterSchema>>({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      category: '',
      price: 200,
    },
  });

  function onSubmit(values: z.infer<typeof filterSchema>) {
    console.log(values);
    setFilter(values);
  }

  return (
    <section className="px-24 pb-9">
      <DynamicBreadcrumbs />
      <div className="flex gap-7 mt-8">
        <Filter
          onSubmit={onSubmit}
          form={form}
        />
        <div
          className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 px-4 flex-grow"
          id="cart"
        >
          {data.map((product: z.infer<typeof dataSchema>) => (
            <CardProduct
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Filter = ({
  onSubmit,
  form,
}: {
  onSubmit: (data: z.infer<typeof filterSchema>) => void;
  form: UseFormReturn<z.infer<typeof filterSchema>>;
}) => {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="p-5 flex flex-col gap-3 border rounded-md max-h-64"
      >
        <div className="flex justify-between border-b pb-2">
          <h1 className="font-sans font-semibold">Filters</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
            />
          </svg>
        </div>
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem className="flex-grow">
              <div className="flex justify-between">
                <FormLabel>Price</FormLabel>
                <small className="text-primary">RM{field.value}</small>
              </div>
              <FormControl>
                <Slider
                  defaultValue={[field.value]}
                  max={1000}
                  step={1}
                  onValueChange={(val) => field.onChange(val[0])}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="flex-grow">
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Select
                  onValueChange={(val) => {
                    field.onChange(val);
                  }}
                  value={field.value}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="steering">Steering</SelectItem>
                    <SelectItem value="tire">Tire</SelectItem>
                    <SelectItem value="brake">Brake</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          className="py-2 rounded-lg bg-primary text-white text-sm font-sans"
          type="submit"
        >
          Apply
        </Button>
      </form>
    </Form>
  );
};
