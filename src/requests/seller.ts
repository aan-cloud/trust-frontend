import 'dotenv/config';
import { allProductInDashboard } from '@/schema/product';
import { z } from 'zod';
import { sellerSchema } from '@/schema/seller';

type ProductSchema = z.infer<typeof allProductInDashboard>
type SellerSchema = z.infer<typeof sellerSchema>[]

export const getAllSeler = async () => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/seller`;

    try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const sellers: SellerSchema = await response.json();

      return sellers;
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: Error | any) {
      console.log(error.message);
    }

}

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