import { ProductDetails } from '@/components/pages/server/productDetails';
import 'dotenv/config';
import { getProductDetails } from '@/requests/products';
import { z } from 'zod';
import { productDetailsSchema } from '@/schema/product';

type ProductDetails = z.infer<typeof productDetailsSchema>

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const product: ProductDetails = await getProductDetails(slug);

  return (
      <ProductDetails product={product}/>
  )
}
