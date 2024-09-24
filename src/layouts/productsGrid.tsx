import { Card } from "../components/card";

export default function Products({ products }: any) {
  return (
    <>
      <h1 id="header" className="">
        All Products
      </h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] gap-5 py-20 px-24">
        {products.data.map((product: any) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}
