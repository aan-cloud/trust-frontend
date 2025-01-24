'use client'

import { SuccessfulPaymentCard } from "@/components/ui/successPayment"

export default function Success () {

    function onDownloadReceipt() {
        console.log("Success download")
    };

    return (
        <div className="h-[calc(100vh-200px)] px-24 py-5 flex justify-center items-center">
            <SuccessfulPaymentCard amount="4" cardLast4="1" date={new Date().toISOString().split('T')[0]} onDownloadReceipt={() => onDownloadReceipt} />
        </div>
    )
}