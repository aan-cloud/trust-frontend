import { ProductDetails } from '@/components/pages/produuctDetails';

import 'dotenv/config';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const url = `${process.env.NEXT_PUBLIC_API_URL}/products/${slug}`;

  const response = await fetch(url);

  if (!response) {
    throw new Error("Can't find product");
  }

  const product = await response.json();
  console.log(product);

  return <ProductDetails product={product} />;
}
