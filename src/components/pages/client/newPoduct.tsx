/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { newProductSchema } from "@/schema/product"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import type { z } from "zod"
import { FileUploaderRegular } from '@uploadcare/react-uploader/next';
import '@uploadcare/react-uploader/core.css';
import { createNewProduct } from "@/requests/products"
import Cookies from "js-cookie"
import { toast } from "sonner"
import { UploadcareFile } from "@uploadcare/file-uploader"
import { useRouter } from "next/navigation"


export const NewProductForm = () => {
  const accessToken = Cookies.get("accessToken");
  const router = useRouter();

  const form = useForm<z.infer<typeof newProductSchema>>({
    resolver: zodResolver(newProductSchema),
    defaultValues: {
      name: "",
      category: "tire",
      description: "",
      imageUrl: [{ imageUrl: "" }],
      price: 1,
      stock: 5,
    },
  });

  async function onSubmit(values: z.infer<typeof newProductSchema>) {
    try {
      const uploadStatus = await createNewProduct(values, accessToken);
      console.log("Submitted image URLs:", values.imageUrl);
      
      if (uploadStatus) {
        toast.success("Produk berhasil dibuat", {
          description: new Date().toLocaleDateString(),
        });
        form.reset();

        router.push("/")
      }
    } catch (error) {
      toast.error("Gagal membuat produk", {
        description: (error as Error).message,
      });
    }
  }


  const handleImageChange = (files: any | null) => {
    if (!files) { return null };

    const images = files.allEntries.map((file: { cdnUrl: any }) => ({ imageUrl: file.cdnUrl }));
    console.log(images)
    form.setValue(
      "imageUrl",
      images,
      { shouldValidate: true }
    );      
  };

  return (
    <section className="flex justify-center items-center pt-8 py-20">
      <div className="flex flex-col items-left min-w-[40%] px-7 py-6 rounded-md shadow-m">
        <div className="mb-6">
            <label className="block mb-2 text-sm font-medium">Upload Gambar</label>
            <FileUploaderRegular
              sourceList="local, url, camera, dropbox"
              classNameUploader="uc-light"
              pubkey="b52d7b963454313121a7"
              multiple={true}
              onChange={(files) => handleImageChange(files as unknown as UploadcareFile[] | null)}
            />
            {form.formState.errors.imageUrl && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.imageUrl.message}
              </p>
            )}
          </div>    
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-full flex flex-col">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your product name" {...field}></Input>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your product description" {...field}></Input>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(val) => {
                        field.onChange(val)
                      }}
                      value={field.value}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tire">Tire</SelectItem>
                        <SelectItem value="brake">Brake</SelectItem>
                        <SelectItem value="steering">Steering</SelectItem>
                        <SelectItem value="lamp">Lamp</SelectItem>
                        <SelectItem value="gearbox">Gearbox</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your product price"
                      type="number"
                      min={1}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      value={field.value}
                    ></Input>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stock</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your product stock"
                      type="number"
                      min={1}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      value={field.value}
                    ></Input>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="bg-primary">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </section>
  )
}