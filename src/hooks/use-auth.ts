'use'

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
import { toast } from "sonner"
import { refreshAccesToken } from "@/requests/auth"
import { getUserProfile } from "@/requests/user"
import type { userProfile } from "@/schema/user"
import { z } from "zod"

type UserProfile = z.infer<typeof userProfile>

export function useAuth() {
  const router = useRouter()
  const [isAuth, setIsAuth] = useState(false)
  const [userName, setUserName] = useState("")

  useEffect(() => {
    async function getAccessToken() {
      const accessToken = Cookies.get("accessToken")
      const refreshToken = Cookies.get("refreshToken")

      if (refreshToken) {
          if (!accessToken) {
            await refreshAccesToken(refreshToken);
            setIsAuth(true)

            const profile: UserProfile = await getUserProfile(accessToken as string)
            console.log(profile)
            setUserName(profile.user.userName)

            router.push("/")
            toast("Relogin success", {
              description: new Date().toISOString().split("T")[0],
              action: { label: "Close", onClick: () => "" },
            });  
          } else {
            const profile: UserProfile = await getUserProfile(accessToken as string)
            setUserName(profile.user.userName)
            setIsAuth(true)
          }
      } else {
        setIsAuth(false)
      }
    }

    getAccessToken();
  }, [router])

  return { isAuth, userName }
}