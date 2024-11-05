import {
  Links,
  Meta,
  Outlet,
  Form,
  Scripts,
  ScrollRestoration,
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
    href: "/apple-touch-icon.png"
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png"
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png"
  },
  {
    rel:"manifest",
    href: "/site.webmanifest"
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
      <body>
        <nav className="flex justify-between content-center">
          <div id="logo">
            <img src="https://ucarecdn.com/ae731f35-d732-4b7e-827d-72d4cace50a7/logotrustnewremovebgpreview.png"/>
          </div>
          <div className="flex justify-between" id="search">
            <select name="" id="">
              {
                optionMenu.map((opt) => (
                  <option value={opt.name}>{opt.name}</option>
                ))
              }
            </select>
            <Form method="post" role="search" id="search-from">
              <input 
              id="q"
              aria-label="Search contacts"
              //defaultValue={ q || "" }
              placeholder="Search"
              type="search"
              //className={searching ? "loading" : ""}
              name="q"/>
              <button type="submit">Search</button>
            </Form>
          </div>
          <div className="flex justify-between" id="feat">
            <div>Wishlist</div>
            <div>Login</div>
            <div>Cart</div>
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
