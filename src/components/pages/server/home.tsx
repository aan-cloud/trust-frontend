import Image from 'next/image';
import { CardProduct } from '../../ui/cardProduct';

import { Card, CardContent, CardHeader } from '../../ui/card';
import { z } from 'zod';
import 'dotenv/config';
import Link from 'next/link';
import { getAllProducts } from '@/requests/products';
import { productSchema } from '@/schema/product';

type ProductSchema = z.infer<typeof productSchema>[]

export const HomePage = async () => {

  const data: ProductSchema = await getAllProducts();
  console.log(data)
  
  return (
    <>
      <section className="sm:flex-row flex flex-col sm justify-between px-4 py-5 sm:px-24">
        <div className="flex flex-col gap-6">
          <h1 className="sm:pt-10 pt-3 font-sans font-black text-3xl sm:text-6xl select-none">
            MAKE YOUR CAR BEAUTIFUL AND MORE HEALTHY
          </h1>
          <p className="font-poppins select-none">
            Look for the items you want, complete, reliable and original
            products that are trusted by more than 100 users.
          </p>
          <Link
            href={'/products'}
            className="px-4 py-2 text-white w-fit border bg-primary rounded-lg"
          >
            Shop now
          </Link>
          <ul className="mt-4 flex justify-start sm:gap-6">
            <li className="pr-7 font-poppins">
              <h3 className="text-2xl font-semibold">200+</h3>
              <small>Customer</small>
            </li>
            <li className="px-7 border-x-2 font-poppins">
              <h3 className="text-2xl font-semibold">10+</h3>
              <small>Partner</small>
            </li>
            <li className="pl-7 font-poppins">
              <h3 className="text-2xl font-semibold">100%</h3>
              <small>Original</small>
            </li>
          </ul>
        </div>
        <div
          className="sm:flex hidden items-center justify-center w-full"
          id="illustration"
        >
          <Image
            src="https://ucarecdn.com/a6a7b57f-f479-4f15-9c41-5fd1050674d7/trusthomeimageremovebgpreview.png"
            alt="Ilustration automotive engineer"
            width={460}
            height={460}
          />
        </div>
      </section>
      <section
        className="grid sm:px-24 grid-cols-[repeat(auto-fill,minmax(70px,1fr))] sm:flex sm:justify-between sm:items-center gap-1 p-4 bg-black"
        id="partner"
      >
        <div className="flex w-6 sm:w-fit sm:gap-4 items-center gap-1">
          <Image
            src={
              'https://ucarecdn.com/80997a9b-8b5f-4f4f-b4f8-bf7a30e9ffe9/perodua.webp'
            }
            alt="Perodua"
            width={50}
            height={50}
          />
          <h1 className="text-sm sm:text-2xl text-white font-sans font-thin sm:font-bold">Perodua</h1>
        </div>
        <div className="flex w-6 sm:w-fit sm:gap-4 items-center gap-1">
          <Image
            src={
              'https://ucarecdn.com/667207de-b722-4d1c-9096-f3a324cde916/protonsparepartssupplierinMalaysia.webp'
            }
            alt="Toyota"
            width={50}
            height={50}
          />
          <h1 className="text-sm sm:text-2xl text-white font-sans font-thin sm:font-bold">Toyota</h1>
        </div>
        <div className="flex w-6 sm:w-fit sm:gap-4 items-center gap-1">
          <Image
            src={
              'https://ucarecdn.com/a27ffd9a-76a7-4363-83db-cc70d91d6da2/HondasparepartssupplierinMalaysia.webp'
            }
            alt="Honda"
            width={50}
            height={50}
          />
          <h1 className="text-sm sm:text-2xl text-white font-sans font-thin sm:font-bold">Honda</h1>
        </div>
        <div className="flex w-6 sm:w-fit sm:gap-4 items-center gap-1">
          <Image
            src={
              'https://ucarecdn.com/d978a410-f006-4652-a07d-4b113493acef/mitsubishisparepartssupplierinMalaysia.webp'
            }
            alt="Mitsubishi"
            width={50}
            height={50}
          />
          <h1 className="text-sm sm:text-2xl text-white font-sans font-thin sm:font-bold">Mitsubishi</h1>
        </div>
        <div className="flex w-6 sm:w-fit sm:gap-4 items-center gap-1">
          <Image
            src={
              'https://ucarecdn.com/d382d922-cbab-4276-b342-3eb2fffcc0dd/toyota.webp'
            }
            alt="Toyota"
            width={50}
            height={50}
          />
          <h1 className="text-sm sm:text-2xl text-white font-sans font-thin sm:font-bold">Toyota</h1>
        </div>
      </section>
      <ProductHighlight
        data={data}
        section="NEW ARRIVAL"
      />
      <ProductHighlight
        data={data}
        section="TOP SALES"
      />
      <Comment
        userName="Farhan"
        message="Excellent service and top-notch quality! The parts I ordered fit perfectly, and the delivery was faster than expected. The prices are reasonable, and the customer support team was very responsive and helpful."
      />
    </>
  );
};

const ProductHighlight = ({
  data,
  section,
}: {
  data: ProductSchema;
  section: string;
}) => {
  return (
    <section
      className="px-4 sm:px-24 py-12 flex flex-col gap-10 bg-white border border-muted"
      id="new"
    >
      <h1 className="sm:text-4xl text-lg font-black font-inte text-center">{section}</h1>
      <div
        className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6 sm:gap-4 p-4"
        id="cart"
      >
        {data.map((product: z.infer<typeof productSchema>) => (
          <CardProduct
            key={product.id}
            product={product}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="px-8 py-2 text-sm border font-poppins border-muted rounded-2xl hover:bg-muted">
          View all
        </button>
      </div>
    </section>
  );
};

// Customer Comments

const Comment = ({
  message,
  userName,
}: {
  message: string;
  userName: string;
}) => {
  return (
    <section className="bg-white py-12">
      <h1 className="px-4 sm:px-24 pt-8 text-xl sm:text-4xl font-black font-inte text-start">
        OUR HAPPY CUSTOMER
      </h1>
      <div className="sm:flex-row flex flex-col px-4 sm:px-24 py-8 gap-4">
        {Array.from({ length: 3 }, (_, index) => index++).map((i) => (
          <Card
            className="sm:max-w-[31%] hover:border hover:border-primary hover:cursor-pointer"
            key={i}
          >
            <CardHeader>
              <div
                className="flex"
                id="star"
              >
                {Array.from({ length: 5 }, (_, index) => index++).map((i) => (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    key={i}
                    className="size-5 stroke-yellow-500 fill-yellow-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                ))}
              </div>
              <div className="flex gap-1">
                <h1 className="font-bold text-lg font-poppins">{userName}</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 fill-blue-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </CardHeader>
            <CardContent>
              <small className="text-sm font-thin font-poppins text-stone-600">
                {message}
              </small>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
