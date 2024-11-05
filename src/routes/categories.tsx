import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import Products from "../layouts/productsGrid";
import Categories from "../types/categories";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export async function categoriesLoader({ params }: LoaderFunctionArgs) {
  try {
    const response = await fetch(`${backendUrl}/categories/${params.category}`);

    if (!response.ok) {
      throw new Error(`Error with code: ${response.status}`);
    }

    const products = await response.json();
    return { products };
  } catch (error: any | unknown) {
    return { products: null };
  }
}

export default function CategoriesRoute() {
  const { products } = useLoaderData() as { products: Categories };

  return (
    <div className="container mx-auto p-4">
      <Products products={products.data.products} />
    </div>
  );
}
