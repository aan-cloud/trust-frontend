export default interface products {
    message: string
    data: product[]
};

interface product {
    id: string
    name: string
    slug: string
    image_url: string
    description: string
    category: string
    stock: string
    price: number
}