import { products } from "../types/productCard";
import DetailsProduct from "../components/details";

export default function DetailsLayout({ product }: { product: products }) {
  return (
    <div className="flex justify-between gap-20 px-36 pt-32 pb-16 min-h-screen min-w-0.5">
      <DetailsProduct product={product} key={product.id} />
    </div>
  );
}
