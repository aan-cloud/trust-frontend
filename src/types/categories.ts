import { products } from "./productCard";

export default interface Categories {
  data: category;
}

export interface category {
  products: products[];
}
