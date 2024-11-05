import { products } from "./productCard"

export interface CartTypes {
    id: string
    items: Items[]
    total: number
}

interface Items {
    id: string
    productId: string
    quantity: number
    cartId: string
    createdAt: string
    updatedAt: string
    product: products
}