import Data from "../data/products.json"
import {ProductCard} from "../components/ProductCard"

export default function Home () {
    return (
        <div>
            {Data.map((d) => <ProductCard imageUrl={d.imageUrl} title={d.title} category={d.category} stock={d.Stock} price={d.price}  />)}
        </div>
    )
}