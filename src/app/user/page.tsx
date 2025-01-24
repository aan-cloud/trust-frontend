import { UserProfile } from "@/components/pages/server/profile"

export default function User () {
    return (
        <div className="flex flex-col gap-3 pt-5 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 py-2 rounded-md bg-muted">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            <UserProfile />
        </div>
    )
}