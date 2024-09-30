export default interface productsType {
  message: string;
  data: products[];
  products: products[];
  product: products;
}

export interface products {
  id: string;
  name: string;
  slug: string;
  image_url: string;
  description: string;
  category: string;
  stock: string;
  price: number;
}
