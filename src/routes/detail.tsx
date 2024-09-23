import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import productsType from "../types/productCard";

export async function detailsLoader({params}: LoaderFunctionArgs) {
    try {
        const response = await fetch(`https://trust-backend-jvcy.onrender.com/products/${params.category}/${params.slug}`);

        if(!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }

        const product = await response.json();
        return {product}
    } catch (error) {
        return {product: null}
    }
}

export default function Details () {
    const {product} = useLoaderData() as {product:  productsType}
    return (
        <>
            {
                product.data.map((detail) => (
                    <h1 key={detail.id} className="text-white w-screen h-screen flex justify-center items-center">{detail.name} Details</h1>
                ))              
            }
        </>
    )
}