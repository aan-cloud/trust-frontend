'use client'

import { FailedPaymentCard } from "@/components/ui/cancelPaymentComponent"

export default function Cancel () {
    function onRetry() {
        console.log("Try again!")
    }
    return (
        <div className="h-[calc(100vh-200px)] px-24 py-5 flex justify-center items-center">
            <FailedPaymentCard amount="2300" date={new Date().toISOString().split('T')[0]} cardLast4="1" onRetry={() => onRetry}/>
        </div>
    )
}