"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { logOut } from "@/requests/auth"
import Cookies from "js-cookie"
import { toast } from "sonner"
import Link from "next/link"
import { Button } from "./button"

type ModalProps = {
    ref: React.RefObject<HTMLDivElement | null>;
    isOpen: boolean
    handleNavLinkClick: () => void
};
  

export const UserCart: React.FC<ModalProps> = ({ isOpen, ref, handleNavLinkClick }) => {
    const router = useRouter();
    const accesToken = Cookies.get("accessToken");
    const refrehToken = Cookies.get("refreshToken");


    async function handleLogout() {
        await logOut(accesToken, refrehToken);

        toast('Logout success', {
            description: new Date().toISOString().split('T')[0],
            action: { label: 'Close', onClick: () => '' },
        });

        router.push("/login")
    }

  return (
    <Card ref={ref} className={isOpen ? "w-fit absolute top-16 right-28 sm:top-16 sm:right-24 z-50 shadow-xl" : "hidden"}>
      <CardContent className="p-4">
        <nav className="flex flex-col space-y-2">
          <Link className="justify-start pl-1 font-semibold font-poppins" href={"/profile"} onClick={handleNavLinkClick}>
          <Button variant="ghost" className="justify-star pl-1 font-semibold font-poppins ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
            </svg>
            Profile
          </Button>
          </Link >
          <Link  href={"/"}>
          <Button variant="ghost" className="justify-start pl-1 font-semibold font-poppins ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
                <path fillRule="evenodd" d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 0 1 1.5 10.875v-3.75Zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 0 1-1.875-1.875v-8.25ZM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 0 1 3 18.375v-2.25Z" clipRule="evenodd" />
            </svg>
            Dashboard
          </Button>
          </Link >
          <Link href={"/"} className="justify-start pl-1 font-semibold font-poppins ">
          <Button variant="ghost" className="justify-start pl-1 font-semibold font-poppins ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
                <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
            </svg>
            Create Product
          </Button>
          </Link >
          <Link href={"/"} onClick={() => handleLogout()} className="h-fit font-semibold font-poppins pl-1 justify-start text-red-500 hover:text-red-700 hover:bg-red-100">
          <Button onClick={() => handleLogout()} variant="ghost" className="h-fit font-semibold font-poppins pl-1 justify-start text-red-500 hover:text-red-700 hover:bg-red-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
                <path fillRule="evenodd" d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z" clipRule="evenodd" />
            </svg>
            Logout
          </Button>
          </Link >
        </nav>
      </CardContent>
    </Card>
  )
}