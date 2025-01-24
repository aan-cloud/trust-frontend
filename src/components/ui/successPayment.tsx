import { CheckCircle, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface SuccessfulPaymentCardProps {
  amount: string
  date: string
  cardLast4: string
  onDownloadReceipt: () => void
}

export function SuccessfulPaymentCard({ amount, date, cardLast4, onDownloadReceipt }: SuccessfulPaymentCardProps) {
  return (
    <Card className="w-full max-w-md bg-green-600 text-white shadow-lg">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-2xl font-bold">
          <CheckCircle className="mr-2 h-6 w-6" />
          Payment Successful
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-lg font-semibold">{amount}</p>
        <p className="text-sm opacity-90">Paid on {date}</p>
        <p className="mt-4 text-sm">Payment was successfully processed using the card ending in {cardLast4}.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="secondary" className="bg-white text-green-600 hover:bg-green-100" onClick={onDownloadReceipt}>
          <Download className="mr-2 h-4 w-4" />
          Download Receipt
        </Button>
        <Button variant="ghost" className="text-white hover:bg-green-700">
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}