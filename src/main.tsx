import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import ErrorPage from "./routes/error";

import RootRoute, { rootLoader } from "./routes/root";

import HomeRoute, { homeLoader } from "./routes/home";

import ProductsRoute, { productsLoader } from "./routes/products";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <RootRoute />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "/",
        element: <HomeRoute />,
        loader: homeLoader,
      },
      {
        path: "/:products",
        element: <ProductsRoute />,
        loader: productsLoader,
      },
      // {
      //   path: "/products/:slug",
      //   element: <ProductSlugRoute />,
      //   loader: productSlugLoader,
      //   action: productSlugAction,
      // },
      // {
      //   path: "/register",
      //   element: <RegisterRoute />,
      //   loader: registerLoader,
      //   action: registerAction,
      // },
      // {
      //   path: "/login",
      //   element: <LoginRoute />,
      //   loader: loginLoader,
      //   action: loginAction,
      // },
      // {
      //   path: "/dashboard",
      //   element: <UserDashboardRoute />,
      //   loader: userDashboardLoader,
      //   action: userDashboardAction,
      // },
      // {
      //   path: "/cart",
      //   element: <CartRoute />,
      //   loader: cartLoader,
      // },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
