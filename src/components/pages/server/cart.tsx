import { getUserCart } from "@/requests/cart";
import { userCartSchema } from "@/schema/cart";
import { z } from "zod";
import { cookies } from "next/headers";
import Image from "next/image";
import { DynamicBreadcrumbs } from "../../ui/dynamicBreadcrumbs";
import { DeleteHandler } from "../client/deleteHandler";
import { redirect } from "next/navigation";
import { CheckoutHandler } from "../client/checkoutHandler";

type UserCartSchema = z.infer<typeof userCartSchema>

export const CartPage = async () => {
    const cookie = await cookies();
    const accesToken = cookie.get("accesToken");

    if (!accesToken) {
        redirect("/");
    }
    
    const userCart: UserCartSchema = await getUserCart(accesToken);

    return (
        <section className="px-24 flex flex-col gap-4 py-5">
            <DynamicBreadcrumbs />
            <h1 className="font-sans font-black text-4xl">
                MY CART
            </h1>
            <div className="py-5 flex justify-between ">
                <div className="min-w-[60%] p-5 flex flex-col gap-3 border rounded-lg">
                    {
                        userCart.items.length > 0 ? 
                        userCart.items.map((item) => (
                            <div key={item.id} className="flex gap-5 border-b pb-3">
                                <Image 
                                    src={item.product.imageUrl[0].imageUrl}
                                    alt={item.product.name}
                                    width={110}
                                    height={80}
                                    className="rounded-xl"
                                />
                                <div className="flex flex-col justify-between py-1">
                                    <h2 className="font-bold font-sans">{item.product.name}</h2>
                                    <small className="font-poppins font-thin">Stock: {item.product.stock}</small>
                                    <small className="font-poppins font-thin">Quantity: {item.quantity}</small>
                                    <h1 className="mt-3 font-semibold font-sans ">RM{item.product.price}</h1>
                                </div>
                                <DeleteHandler slug={item.product.slug} cartItemId={item.id} accesToken={accesToken}/>
                            </div>
                        )) : (
                            <h1 className="font-normal h-full flex items-center font-poppins justify-center text-xl">Cart is empty ⚠</h1>
                        )
                    }
                </div>
                <CheckOut totalPrice={userCart.totalPrice} />
            </div>
        </section>
    )
}

const CheckOut = ({ totalPrice }: { totalPrice: number }) => {

    return (
        <div className="flex flex-col border rounded-lg gap-2 h-fit min-w-[35%] p-5">
                    <h1 className="font-bold font-sans">Order Summary</h1>
                    <ul className="border-b pb-2">
                        <li className="flex justify-between">
                            <small>Subtotal</small>
                            <h5 className="font-semibold">{totalPrice}</h5>
                        </li>
                        <li className="flex justify-between">
                            <small>Discount (0%)</small>
                            <h5 className="font-semibold text-red-500">-</h5>
                        </li>
                        <li className="flex justify-between">
                            <small>Delivery Fee</small>
                            <h5 className="font-semibold">-</h5>
                        </li>
                    </ul>
                    <div id="total" className="flex justify-between">
                        <small>Total</small>
                        <h5 className="font-semibold">{totalPrice}</h5>
                    </div>
                    <CheckoutHandler totalPrice={totalPrice}/>
                </div>
    )
}