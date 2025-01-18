import 'dotenv/config';
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";


export const addToCart = async (productId: string,token: string, sum: number) => {
  console.log(productId)
  const url = `${process.env.NEXT_PUBLIC_API_URL}/cart/${productId}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ sum })
    });

    if(!response.ok) {
      throw new Error(`${response.statusText}`)
    }
    
    const cartData = await response.json();

    return cartData

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: Error | any) {
    throw new Error(`${error.message}`)
  }
}

export const getUserCart = async (accesToken: RequestCookie) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/cart`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accesToken?.value}`,
      },
    });

    if(!response.ok) {
      throw new Error(`Not Authenticate! ${response.statusText}`)
    }
    
    const cartData = await response.json();

    return cartData

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: Error | any) {
    throw new Error(`${error.message}`)
  }
}

export const deleteCartItem = async (accesToken: RequestCookie | undefined, slug: string, cartItemId: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/cart/${slug}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accesToken?.value}`,
      },
      body: JSON.stringify({ cartItemId: cartItemId })
    });

    if(!response.ok) {
      throw new Error(`${response.statusText}`)
    }
    
    const deletedCartData = await response.json();

    return deletedCartData

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: Error | any) {
    throw new Error(`${error.message}`)
  }
}