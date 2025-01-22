import { UserSideBar } from "@/components/ui/userSideBar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <main className="flex px-24 gap-11 bg-white">
        <UserSideBar />
        {children}
      </main>
  )
}