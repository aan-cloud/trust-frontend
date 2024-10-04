import { Card } from "../components/card";
import Search from "../components/search";

export default function Products({ products, onSearch }: any) {
  return (
    <>
      <div className="flex flex-col py-20 items-start px-24 gap-3">
      <Search onSearch={onSearch} />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] gap-5 py-4">
        {products.map((product: any) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
    </>
  );
}
