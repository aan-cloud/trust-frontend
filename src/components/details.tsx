import { products } from "../types/productCard";
import { useState } from "react";

export default function DetailsProduct({ product }: { product: products }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div className="w-[60vw] h-[65vh] flex items-center justify-center rounded-md p-6 bg-[hsl(240deg,3.7%,15.9%,50%)]">
        <img src={product.imageUrl} className="object-cover scale-75" />
      </div>
      <div className="w-1/2 flex flex-col py-1 gap-5">
        <h3 className="text-white text-4xl font-poppins font-bold break-words">
          {product.name}
        </h3>
        <h4 className="text-white text-xl font-poppins font-normal mb-3">
          RM{product.price}
        </h4>
        <div className="flex flex-col gap-5">
          <h3 className="text-white text-base font-poppins font-extralight">
            QUANTITY
          </h3>
          <div className="flex bg-transparent gap-4 w-0.5 mb-6">
            <button
              onClick={() => (quantity < 2 ? {} : setQuantity(quantity - 1))}
              className="py-1 px-4 border-[1px] border-[hsla(0deg,0%,98%,20%)] rounded-md bg-transparent text-white text-lg font-medium"
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              className="border border-[hsla(0deg,0%,98%,20%)] rounded-md bg-transparent w-12 text-white text-lg font-normal text-center"
            />
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="py-1 px-4 border-[1px] border-[hsla(0deg,0%,98%,20%)] rounded-md text-white text-lg font-medium"
            >
              +
            </button>
          </div>
          <button className="p-3 border border-[hsla(0deg,0%,98%,60%)] rounded-sm text-base text-white font-medium">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
