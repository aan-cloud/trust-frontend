import { authSchema } from "@/schema/register";
import { z } from "zod";
import Cookies from "js-cookie";
import 'dotenv/config';
import { loginResponseSchema, logOutSchema } from "@/schema/login";

export const authFetch = async (userData: z.infer<typeof authSchema>, page: string) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/${page}`;
    console.log(userData)

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData)
      });

      if(!response.ok) {
        throw new Error(`Data incorrect! ${response.statusText}`)
      }
      
      const userAuthData: z.infer<typeof loginResponseSchema> = await response.json();
      console.log(userAuthData)

      const token = Cookies.get("accesToken");

      if (!token && page === "login") {
        Cookies.set("accesToken", userAuthData.accesToken, { expires: 15/1400, path: ""})
        Cookies.set("refreshToken", userAuthData.refreshToken, { expires: 14, path: ""})
      }

      return page

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: Error | any) {
      throw new Error(`${error.message}`)
    }
}

export const refreshAccesToken = async (refreshToken: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken })
    });

    if(!response.ok) {
      throw new Error(`${response.statusText}`)
    }
    
    const userAuthData: z.infer<typeof loginResponseSchema> = await response.json();

    Cookies.set("accessToken", userAuthData.accesToken, { expires: 15/1400, path: ""})
    Cookies.set("refreshToken", userAuthData.refreshToken, { expires: 14, path: ""})

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: Error | any) {
    throw new Error(`${error.message}`)
  }
}

export const logOut = async (accesToken: string | undefined, refreshToken: string | undefined) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/logout`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accesToken}`,
      },
      body: JSON.stringify({ refreshToken })
    });

    if(!response.ok) {
      throw new Error(`${response.statusText}`)
    }
    
    const userAuthData: z.infer<typeof logOutSchema> = await response.json();

    Cookies.remove("accesToken");
    Cookies.remove("refreshToken");

    return userAuthData;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: Error | any) {
    throw new Error(`${error.message}`)
  }
}