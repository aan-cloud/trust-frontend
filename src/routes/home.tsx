import { useLoaderData } from "react-router-dom";
import products from "../types/productCard";

export async function homeLoader () {
    try {
        const response = await fetch('https://trust-backend-jvcy.onrender.com/products');

        if(!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }

        const products = await  response.json();

        return {products}
    } catch (error: any | unknown) {
        return `Error with code ${error.message}`
    };
};

export default function HomeRoute () {
    const {products}  = useLoaderData() as {products: products};

    console.log(products)

    return (
       <div>
        <h1>All products</h1>
        {
            products.data.map((product) => (
                <div key={product.id}>
                    <img src={product.image_url} width="300" height="350"/>
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    <p>{product.stock}</p>
                    <p>{product.price}</p>
                </div>
            ))
        }
       </div>
    );
};