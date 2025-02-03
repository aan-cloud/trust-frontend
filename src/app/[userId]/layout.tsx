import { getUserProfile } from "@/requests/user"
import { cookies } from "next/headers"
import { notFound } from "next/navigation"
import type React from "react"

export default async function UserLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ userId: string }>
}) {
  const cookie = await cookies();
  const accessToken = cookie.get("accessToken");
  const userId = (await params).userId;

  if (!accessToken) {
    notFound()
  }

  try {
    const userProfile = await getUserProfile(accessToken.value)
    if (userProfile.user.id !== userId) {
      notFound()
    }
  } catch (error) {
    console.error("Error validating user:", error)
    notFound()
  }

  return <>{children}</>
}