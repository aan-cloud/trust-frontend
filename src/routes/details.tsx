import { useLoaderData, LoaderFunctionArgs, redirect } from "react-router-dom";
import DetailsLayout from "../layouts/details";
import { accessToken } from "../libs/acces-token";

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

export async function action({ request }: LoaderFunctionArgs) {
  const token = await accessToken.get();

  if (!token) {
    return null
  };

  const formdData = await request.formData();

  const addToCartData = {
    productId : formdData.get("productId")?.toString(),
    quantity: Number( formdData.get("quantity"))
  };

  const response = await fetch(`${backendUrl}/cart/items`, {
    method: "POST",
    body: JSON.stringify(addToCartData),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const addTocartResponse = await response.json();

  if (!addTocartResponse) return null

  return redirect("/cart")
};
