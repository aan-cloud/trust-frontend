import productsType from "../types/productCard"
import DetailsProduct from "../components/details"

export default function DetailsLayout ({products}: {products: productsType}) {
    return (
        <div className="flex justify-between gap-20 px-36 pt-32 pb-16 min-h-screen min-w-0.5">
            {
                products.data.map((product) => (
                    <DetailsProduct product={product} />
                ))
            }
        </div>
    )
};