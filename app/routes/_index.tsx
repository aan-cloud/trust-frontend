import type { MetaFunction } from "@remix-run/node";

import { Link } from "@remix-run/react";
import { useState } from "react";

import { carCategries, images, products } from "~/data";
import Information from "~/shared/information";
import Footer from "~/shared/footer";

import ProductCatalog from "~/shared/productCatalogs";

export const meta: MetaFunction = () => {
  return [
    { title: "Trust" },
    { name: "description", content: "Welcome to Trust, just trust me!" },
  ];
};

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlide = images.length;

  const moveSlide = (step: number) => {
    setCurrentSlide((prev) => (prev + step + totalSlide) % totalSlide);
  };
  return (
    <>
      <div className="px-28 py-10 shadow-inner" id="main">
        <div
          className="relative w-full mx-w-4xl  mx-auto overflow-hidden"
          id="picture"
        >
          <div
            className="w-full flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((img) => (
              <img
                key={img.name}
                className="h-auto"
                src={img.src}
                alt={img.name}
              />
            ))}
          </div>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-whie p-3 "
            onClick={() => moveSlide(1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-whie p-3"
            onClick={() => moveSlide(-1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-4 mt-10" id="car-category">
          {carCategries.map((car) => (
            <Link to={""}>
              <div className="pb-2 border flex flex-col items-center">
                <img src={car.src} alt="" />
                <p className="text-gray-600 font-bold text-base">{car.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <ProductCatalog products={products} />
      <Information />
      <Footer />
    </>
  );
}
