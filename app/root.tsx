import {
  Links,
  Meta,
  Outlet,
  Form,
  Scripts,
  Link,
  ScrollRestoration,
  MetaFunction,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import { optionMenu } from "./data";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png",
  },
  {
    rel: "manifest",
    href: "/site.webmanifest",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-[#f0f0f0]">
        <nav className="pt-4 pb-2 flex flex-col bg-white">
          <div
            id="upside"
            className="px-28 flex justify-between items-center py-2 border-b"
          >
            <div
              id="logo"
              className="w-[200px] h-[54px] flex justify-center items-center"
            >
              <Link to={""}>
                <img
                  className="scale-90 object-cover"
                  src="https://ucarecdn.com/501c2dd8-c4ff-43ae-b753-5e663686c5ca/-/preview/300x80/"
                />
              </Link>
            </div>
            <div
              className="w-[50%] flex justify-center content-center"
              id="search"
            >
              <Form
                className="w-full h-11 px-4 items-center gap-2
             rounded-xl bg-[#d4d4d4] flex justify-between font-normal"
                method="post"
                role="search"
                id="search-from"
              >
                <input
                  className="w-full bg-transparent border-none outline-none text-black placeholder:text-[#5e5e5e]"
                  id="q"
                  aria-label="Search contacts"
                  //defaultValue={ q || "" }
                  placeholder="Search products"
                  type="search"
                  //className={searching ? "loading" : ""}
                  name="q"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-[#5e5e5e]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </Form>
            </div>
            <div className="flex justify-center gap-2 text-black" id="feat">
              <Link to={""} className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </Link>
              <Link to={""} className="flex justify-between content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </Link>
              <Link to={""} className="flex justify-between content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div
            className="px-28 text-[#3C3D37] font-semibold py-3 flex justify-between items-center"
            id="downside"
          >
            <select
              className="min-w-56 rounded-md bg-orange-600 px-2 pr-4 py-3 text-[#fff]"
              name="Category"
              id="category"
            >
              <option value="all-category">All Category</option>
              <option value="Tire">Tire</option>
              <option value="Engine">Engine</option>
            </select>
            <ul className="flex justify-between items-center gap-7">
              <Link to={""}>
                <li className="px-2 py-1 hover:bg-[#CCD3CA] rounded-sm">
                  Home
                </li>
              </Link>
              <li className="px-2 py-1 hover:bg-[#CCD3CA] rounded-sm">
                E-warranty
              </li>
              <li className="px-2 py-1 hover:bg-[#CCD3CA] rounded-sm">
                About Us
              </li>
              <li className="px-2 py-1 hover:bg-[#CCD3CA] rounded-sm">
                Contact US
              </li>
              <li className="px-2 py-1 hover:bg-[#CCD3CA] rounded-sm">
                Login/Register
              </li>
            </ul>
            <div
              className="flex justify-between items-center gap-1"
              id="phone_body"
            >
              <small className="text-[#CCD3CA]">Call Us:</small>
              <h3>08767387367</h3>
            </div>
          </div>
        </nav>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
