import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import DetailsLayout from "../layouts/details";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export async function detailsLoader({ params }: LoaderFunctionArgs) {
  try {
    const response = await fetch(`${backendUrl}/products/${params.slug}`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const product = await response.json();
    return { product };
  } catch (error) {
    return { product: null };
  }
}

export default function Details() {
  const { product } = useLoaderData() as { product: any };

  return <DetailsLayout product={product.data} />;
}
