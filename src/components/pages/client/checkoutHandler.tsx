'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { checkout } from "@/requests/checkout";
import Cookies from "js-cookie";
import { toast } from "sonner";

export const CheckoutHandler = ({totalPrice}: {totalPrice: number}) => {
    const router = useRouter();
    const accessToken = Cookies.get("accessToken");

    async function handleCheckout() {
        if (totalPrice <= 0) {
            toast('Checkout failed, add product to cart first!', {
                description: new Date().toISOString().split('T')[0],
                action: { label: 'Close', onClick: () => '' },
            });
            router.push("/products")
        }
        const redirectUrl = await checkout(accessToken);
        router.push(redirectUrl);
    }

    return <Button onClick={() => handleCheckout()} className="mt-2">Checkout</Button>
}