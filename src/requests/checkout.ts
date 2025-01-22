import 'dotenv/config';

export const checkout = async (token: string | undefined) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/checkout/session`;
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
  
      if(!response.ok) {
        throw new Error(`${response.statusText}`)
      }
      
      const { sessionUrl } = await response.json();
  
      return sessionUrl;
  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: Error | any) {
      throw new Error(`${error.message}`)
    }
  }