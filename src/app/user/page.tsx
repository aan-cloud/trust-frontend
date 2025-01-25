import { UserProfile } from "@/components/pages/server/profile"

export default function User () {
    return (
        <div className="px-24 py-5 bg-white flex flex-col gap-3 pt-5 w-full">
            <UserProfile />
        </div>
    )
}