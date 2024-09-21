export default interface productsType {
  message: string;
  data: product[];
  product: product;
}

export interface product {
  id: string;
  name: string;
  slug: string;
  image_url: string;
  description: string;
  category: string;
  stock: string;
  price: number;
}
