import { UserProfile } from "@/components/pages/server/profile"

export default function User () {
    return (
        <div className="sm:px-24 px-4 py-5 bg-white flex flex-col gap-3 pt-5 w-full">
            <UserProfile />
        </div>
    )
}