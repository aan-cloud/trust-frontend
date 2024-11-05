import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import ErrorPage from "./routes/error";

import RootRoute, { rootLoader } from "./routes/root";

import HomeRoute, { homeLoader } from "./routes/home";

import AllProducts, { allProductsLoader } from "./routes/products";

import CategoriesRoute, { categoriesLoader } from "./routes/categories";

import Details, { detailsLoader, action as detailAction } from "./routes/details";

import Register, {loader as registerLoader, action as registerAction} from "./routes/register";

import Login, { loader as loginLoader, action as loginAction} from "./routes/login";

import DashboardRoute, {loader as userDashboardLoader, action as userDashboardAction} from "./routes/dashboard";

import CartRoute, {loader as cartLoader} from "./routes/cartRoute";

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
        path: "/products",
        element: <AllProducts />,
        loader: allProductsLoader,
      },
      {
        path: "/:category",
        element: <CategoriesRoute />,
        loader: categoriesLoader,
      },
      {
        path: "products/:slug",
        element: <Details />,
        loader: detailsLoader,
        action: detailAction
      },
      {
        path: "/register",
        element: <Register />,
        loader: registerLoader,
        action: registerAction,
      },
      {
        path: "/login",
        element: <Login />,
        loader: loginLoader,
        action: loginAction,
      },
      {
        path: "/dashboard",
        element: <DashboardRoute />,
        loader: userDashboardLoader,
        action: userDashboardAction,
      },
      {
        path: "/cart",
        element: <CartRoute />,
        loader: cartLoader,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
