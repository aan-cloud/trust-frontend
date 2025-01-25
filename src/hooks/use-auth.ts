import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
import { toast } from "sonner"
import { refreshAccesToken } from "@/requests/auth"
import { useAuthContext } from "@/context/authContext"
import { getUserProfile } from "@/requests/user"

export function useAuth() {
  const router = useRouter()
  const [isAuth, setIsAuth] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const { setUserName } = useAuthContext();
  const boxRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    async function getAccessToken() {
      const accessToken = Cookies.get("accessToken")
      const refreshToken = Cookies.get("refreshToken")

      if (refreshToken) {
          if (!accessToken) {
            const refreshUserToken = await refreshAccesToken(refreshToken);
            setIsAuth(true)
            setUserName(refreshUserToken.userName);
            router.push("/")
            toast("Relogin success", {
              description: new Date().toISOString().split("T")[0],
              action: { label: "Close", onClick: () => "" },
            });  
          } else {
            const userProfile = await getUserProfile(accessToken);
            setUserName(userProfile.user.userName);
            setIsAuth(true)
          }
      } else {
        setIsAuth(false)
      }
    }

    getAccessToken();

    if (isAuth) {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    } else {
        return;
    }
  })

  return { isAuth, boxRef, isOpen, setIsOpen }
}