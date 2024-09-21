import { Card } from "../components/card";

export default function Products({ products }: any) {
  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-5 py-7 px-16">
        {products.data.map((product: any) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}
