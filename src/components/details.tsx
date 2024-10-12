import { products } from "../types/productCard";
import { Form } from "react-router-dom";

export default function DetailsProduct({ product }: { product: products }) {

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
          <Form method="post" className="w-full">
          <input type="hidden" name="productId" defaultValue={product.id} />
          <div className="flex bg-transparent gap-4 w-0.5 mb-6">
            <input
              type="number"
              name="quantity"
              defaultValue={1}
              min={1}
              required
              className="border border-[hsla(0deg,0%,98%,20%)] rounded-md bg-transparent w-16 text-white text-lg font-normal py-1 px-3"
            />
          </div>
          <button className="w-full p-3 border border-[hsla(0deg,0%,98%,60%)] rounded-sm text-base text-white font-medium">
            Add to Cart
          </button>
          </Form>
        </div>
      </div>
    </>
  );
}
