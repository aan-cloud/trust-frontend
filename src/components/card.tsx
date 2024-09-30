import { Link } from "react-router-dom";
import productsType from "../types/productCard";

export const Card: any = ({ product }: productsType) => {
  return (
    <Link to={`/products/${product.slug}`}>
      <div
        key={product.id}
        className="text-white bg-[hsl(240deg,3.7%,15.9%,50%)] flex flex-col justify-between items-center gap-2 rounded-sm hover:scale-105 transition-transform duration-300 ease-in-out shadow-sm"
      >
        <div className="w-full h-40 bg-[#606060] rounded-lg flex items-center px-8 py-3 justify-center rounded-b-none">
          <img src={product.image_url} className="object-cover" />
        </div>
        <div className="flex flex-col pb-4 pl-4 pr-4 justify-start w-full">
          <h4 className="font-light font-poppins mt-2 text-sm">
            {product.name}
          </h4>
          <p className="font-poppins font-extralight text-[11px]">
            Stock {product.stock}
          </p>
          <p className="font-bold text-base font-roboto tracking-wide mt-2">
            RM{product.price}
          </p>
        </div>
      </div>
    </Link>
  );
};
