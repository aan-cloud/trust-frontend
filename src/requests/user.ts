
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
          
        const userProfile = await response.json();
        console.log(userProfile);
      
        return userProfile;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: Error | any) {
      console.log(error.message);
    }
}