import productCard from "../types/productCard"

export const ProductCard: React.FC<productCard> = ({imageUrl, title, category, stock, price}) => {
    
    return (
        <div>
            <div className="image">
                <img src={imageUrl} alt="" />
            </div>
            <h3>{title}</h3>
            <small>{category}</small>
            <small>Stock: {stock}</small>
            <h3>$:{price}</h3>
        </div>
    )
}