import 'dotenv/config';
import { allProductInDashboard } from '@/schema/product';
import { z } from 'zod';

type ProductSchema = z.infer<typeof allProductInDashboard>

export const getSellerDashBoard = async (sellerId: string, token: string) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/seller/${sellerId}/dashboard`;

    try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const product: ProductSchema = await response.json();

      return product;
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: Error | any) {
      console.log(error.message);
    }
}