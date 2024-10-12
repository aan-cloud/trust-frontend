import { Cart } from "../components/cart";
import { useLoaderData } from "react-router-dom";
import { CartTypes } from "../types/cart";
import { accessToken } from "../libs/acces-token";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const token = accessToken.get();

export async function loader() {
    try {
        const response = await fetch(`${backendUrl}/cart`, {
            headers: {"Authorization": `Bearer ${token}`}
        });

        const cart = await response.json();

        return { cart }
    } catch (error) {
        throw new Error("Failed fetcing cart");
    }
}

export default function CartRoute() {
    const { cart } = useLoaderData()as {cart: CartTypes}

    return (
        <div className="py-32 px-44 min-h-screen w-screen flex items-baseline justify-between">
            <Cart {...cart}/>
        </div>
    );
};