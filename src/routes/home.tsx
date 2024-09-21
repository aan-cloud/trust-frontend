import { useLoaderData } from "react-router-dom";
import productsType from "../types/productCard";
import Products from "../layouts/productsGrid";
import Background from "../components/background";

export async function homeLoader() {
  try {
    const response = await fetch(
      "https://trust-backend-jvcy.onrender.com/products",
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const products = await response.json();

    return { products };
  } catch (error: any | unknown) {
    return { products: null };
  }
}

export default function HomeRoute() {
  const { products } = useLoaderData() as { products: productsType };

  console.log(products);

  return (
    <>
        <Background />
        <div>
          <Products products={products} />
        </div>
    </>
  );
}
