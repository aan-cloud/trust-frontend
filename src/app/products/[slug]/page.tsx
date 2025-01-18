import { ProductDetails } from '@/components/pages/produuctDetails';
import { Suspense } from 'react';
import LoadingIndicator from '@/components/ui/loadingIndicator';

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

  return (
    <Suspense fallback={<LoadingIndicator />}>
      <ProductDetails product={product}/>
    </Suspense>
  )
}
