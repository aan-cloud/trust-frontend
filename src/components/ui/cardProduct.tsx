import Image from 'next/image';
import { z } from 'zod';
import { productSchema } from '@/schema/product';
import Link from 'next/link';

export const CardProduct = ({
  product,
}: {
  product: z.infer<typeof productSchema>;
}) => {
  return (
    <Link
      href="/products/[slug]"
      as={`/products/${product.slug}`}
      className="flex flex-col gap-2"
    >
      <Image
        src={product.imageUrl[0].imageUrl}
        alt={product.name}
        width={200}
        height={200}
        className="rounded-xl"
      />
      <h2 className="pl-1 font-sans text-sm font-bold">{product.name}</h2>
      <small className="pl-1 flex">
        {Array.from(
          { length: Math.floor(product.rate) },
          (_, index) => index++
        ).map((i) => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            key={i}
            className="size-3 stroke-yellow-500 fill-yellow-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
        ))}
      </small>
      <h1 className="pl-1 text-base font-bold font-sans text-primary">{`RM ${product.price}`}</h1>
    </Link>
  );
};
