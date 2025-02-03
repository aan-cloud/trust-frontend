"use client"

import { Form, FormControl, FormField, FormItem, FormLabel } from "../../ui/form"
import { DynamicBreadcrumbs } from "../../ui/dynamicBreadcrumbs"
import { Slider } from "@/components/ui/slider"
import { Button } from "../../ui/button"
import "dotenv/config"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import type { z } from "zod"
import { useForm } from "react-hook-form"
import type { UseFormReturn } from "react-hook-form"
import { formFilterSchema } from "@/schema/product"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState, useEffect } from "react"
import { CardProduct } from "../../ui/cardProduct"
import type { productSchema } from "@/schema/product"
import { toast } from "sonner"
import { getAllProducts } from "@/requests/products"

type ProductSchema = z.infer<typeof productSchema>

type Filter = {
  name?: { contains: string | undefined } | null
  price?: { lt: number | undefined } | null
  category?: { name: string | undefined } | null
  publish: boolean
}

export const ProductsList = ({ name }: { name: string }) => {
  const [data, setData] = useState<ProductSchema[]>([])
  const [filter, setFilter] = useState<Filter>({
    publish: true,
    name: null,
    price: null,
    category: null
  })
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  useEffect(() => {

    async function fetchData() {
      const newFilter = name
      ? {
            name: {
              contains: name,
              mode: "insensitive",
            },
            publish: true
          }
      : { ...filter }

      const allProduct = await getAllProducts(newFilter);
      console.log(allProduct)
      
      if (allProduct?.length === 0) {
        toast('No Product Matched!', {
          description: new Date().toISOString().split('T')[0],
          action: { label: 'Close', onClick: () => '' },
        });
      } else {
        if (allProduct) {
          setData(allProduct)
        }
      }

    }

    fetchData();

    const handleResize = () => {
      if (window.innerWidth >= 640) {
        if (name) {
          setIsOpenFilter(false);
        } else {
          setIsOpenFilter(true);
        }
      } else {
        setIsOpenFilter(false);
      }
    };

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [ filter, name ])

  const form = useForm<z.infer<typeof formFilterSchema>>({
    resolver: zodResolver(formFilterSchema),
    defaultValues: {
      category: "all",
      price: 200,
    },
  })

  const onSubmit = (values: z.infer<typeof formFilterSchema>) => {
    console.log("Form submitted with values:", values)
    setFilter({
      ...filter,
      category: {
        name: values.category
      },
      price: {
        lt: values.price
      }
    })
  }

  return (
    <section className="sm:px-24 px-4 py-5 pb-9">
      <DynamicBreadcrumbs />
      <div className="flex sm:flex-row flex-col gap-7 mt-8">
        <Button
          onClick={() => setIsOpenFilter(!isOpenFilter)}
          className="flex sm:hidden text-base font-normal font-poppins"
        >
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
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
          {isOpenFilter ? "Close Filter" : "Open Filter"}
        </Button>
        <Filter onSubmit={onSubmit} form={form} isOpenFilter={isOpenFilter} />
        <div
          className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 ms:px-4 flex-grow"
          id="cart"
        >
          {data.map((product: ProductSchema) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

const Filter = ({
  onSubmit,
  form,
  isOpenFilter,
}: {
  onSubmit: (data: z.infer<typeof formFilterSchema>) => void
  form: UseFormReturn<z.infer<typeof formFilterSchema>>
  isOpenFilter: boolean
}) => {

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={!isOpenFilter ? "hidden" : "p-5 flex flex-col gap-5 sm:gap-3 border rounded-md sm:max-h-64"}
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
                  defaultValue={[field.value as number]}
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
                    console.log("Category changed:", val)
                    field.onChange(val)
                  }}
                  value={field.value}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="steering">Steering</SelectItem>
                    <SelectItem value="tire">Tire</SelectItem>
                    <SelectItem value="brake">Brake</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="py-2 rounded-lg bg-primary text-white text-sm font-sans" type="submit">
          Apply
        </Button>
      </form>
    </Form>
  )
}
