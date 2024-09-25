import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import productsType from "../types/productCard";
import DetailsLayout from "../layouts/details";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export async function detailsLoader({ params }: LoaderFunctionArgs) {
  try {
    const response = await fetch(
      `${backendUrl}/products/${params.category}/${params.slug}`,
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const products = await response.json();
    return { products };
  } catch (error) {
    return { products: null };
  }
}

export default function Details() {
  const { products } = useLoaderData() as { products: productsType };
  return <DetailsLayout products={products} />;
}
