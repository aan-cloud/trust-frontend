import 'dotenv/config';
import { filterSchema, newProductSchema, productSchema } from '@/schema/product';
import { z } from 'zod';

export const getAllProducts = async (filter?: z.infer<typeof filterSchema>) => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    let params;

    if (filter) {
      params = new URLSearchParams({
        filter: JSON.stringify(filter),
      });
    };

    const url = `${baseUrl}/products${filter ? `?${params}` : ""}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const products: z.infer<typeof productSchema>[] = await response.json();

      return products;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: Error | any) {
      console.log(error.message);
    }
}

export const getProductDetails = async (slug: string) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/products/${slug}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const productDetails = await response.json();

      return productDetails;
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: Error | any) {
      console.log(error.message);
    }
}

export const createNewProduct = async (newProductData: z.infer<typeof newProductSchema>, token: string | undefined ) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/products/create`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ ...newProductData })
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const productDetails = await response.json();

    return productDetails;
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: Error | any) {
    console.log(error.message);
  }
}