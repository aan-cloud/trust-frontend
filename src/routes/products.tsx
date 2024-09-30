import Products from "../layouts/productsGrid";
import {
  useLoaderData,
  LoaderFunctionArgs,
  useSearchParams,
} from "react-router-dom";
import productsType from "../types/productCard";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export async function allProductsLoader({ request }: LoaderFunctionArgs) {
  try {
    const url = new URL(request.url);
    const name = url.searchParams.get("name") || "";
    const query = name ? `?name=${encodeURIComponent(name)}` : "";

    const response = await fetch(`${backendUrl}/products${query}`);

    if (!response.ok) {
      throw new Error(`Error with code: ${response.status}`);
    }

    const products = await response.json();
    return { products };
  } catch (error) {
    console.error(error);
    return { products: null };
  }
}

export default function AllProducts() {
  const { products } = useLoaderData() as { products: productsType };
  const [, setSearchParams] = useSearchParams();

  const handleSearch = (searchTerm: string) => {
    if (searchTerm) {
      setSearchParams({ name: searchTerm });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="container mx-auto p-4">
      {products ? (
        <Products products={products.data} onSearch={handleSearch} />
      ) : (
        <p className="text-red-500">Terjadi kesalahan saat memuat produk.</p>
      )}
    </div>
  );
}
