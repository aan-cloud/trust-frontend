import { authSchema } from "@/schema/register";
import { z } from "zod";
import Cookies from "js-cookie";
import 'dotenv/config';

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
      
      const userAuthData = await response.json();
      console.log(userAuthData)

      const token = Cookies.get("access token");

      if (!token && page === "login") {
        Cookies.set("accesToken", userAuthData.accesToken, { expires: 15/1400, path: ""})
      }

      return page

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: Error | any) {
      throw new Error(`${error.message}`)
    }
}