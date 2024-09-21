import productsType from "../types/productCard";

export const Card: any = ({ product }: productsType) => {
  return (
    <div key={product.id}>
      <div className="w-46 h-40 bg-[#EBEBEB] rounded-lg flex items-center justify-center">
        <img src={product.image_url} className="object-cover" />
      </div>
      <h4 className="font-semibold font-poppins mt-2 text-sm">{product.name}</h4>
      <p className="font-poppins text-[11px]">Stock {product.stock}</p>
      <p className="font-semibold font-poppins mt-2 text-sm">RM{product.price}</p>
    </div>
  );
};