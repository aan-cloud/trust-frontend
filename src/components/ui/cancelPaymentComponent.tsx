'use client'

import { AlertCircle, RefreshCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface FailedPaymentCardProps {
  amount: string
  date: string
  cardLast4: string
  onRetry: () => void
}

export function FailedPaymentCard({ amount, date, cardLast4, onRetry }: FailedPaymentCardProps) {
  return (
    <Card className="w-full max-w-md bg-red-600 text-white shadow-lg">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-2xl font-bold">
          <AlertCircle className="mr-2 h-6 w-6" />
          Payment Failed
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-lg font-semibold">{amount}</p>
        <p className="text-sm opacity-90">Attempted on {date}</p>
        <p className="mt-4 text-sm">We were unable to process your payment using the card ending in {cardLast4}.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="secondary" className="bg-white text-red-600 hover:bg-red-100" onClick={onRetry}>
          <RefreshCcw className="mr-2 h-4 w-4" />
          Retry Payment
        </Button>
        <Button variant="ghost" className="text-white hover:bg-red-700">
          Update Card
        </Button>
      </CardFooter>
    </Card>
  )
}