import Products from "../layouts/productsGrid";
import { useLoaderData } from "react-router-dom";
import products from "../types/productCard";

export async function allProductsLoader() {
    try {
        const response = await fetch(
      `https://trust-backend-jvcy.onrender.com/products`,
    );

    if (!response.ok) {
      throw new Error(`Error with code: ${response.status}`);
    }

    const products = await response.json();
    return {products}
    } catch (error) {
        
    }
}

export default function AllProducts() {
    const {products} = useLoaderData() as {products: products }
    return (
        <Products products={products}/>
    )
}