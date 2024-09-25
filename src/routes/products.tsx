import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import products from "../types/productCard";
import Products from "../layouts/productsGrid";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export async function productsLoader({ params }: LoaderFunctionArgs) {
  try {
    const response = await fetch(
      `${backendUrl}/${params.products}`,
    );

    if (!response.ok) {
      throw new Error(`Error with code: ${response.status}`);
    }

    const products = await response.json();
    return { products };
  } catch (error: any | unknown) {
    return { products: null };
  }
}

export default function ProductsRoute() {
  const { products } = useLoaderData() as { products: products };

  return (
    <div>
      <Products products={products} />
    </div>
  );
}
