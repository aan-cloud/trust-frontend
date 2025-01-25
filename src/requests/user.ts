import { userProfile } from "@/schema/user";
import { z } from "zod";

export const getUserProfile = async (token: string | undefined) => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    const url = `${baseUrl}/auth/me`;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
      
        if(!response.ok) {
            throw new Error(`${response.statusText}`)
        }
          
        const userInfo: z.infer<typeof userProfile> = await response.json();
        console.log(userProfile);
      
        return userInfo;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: Error | any) {
      throw new Error(`Error ${error.message}`)
    }
}