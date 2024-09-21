import { Outlet } from "react-router-dom";
import Navigation from "../layouts/navigation";
import Products from "../layouts/productsGrid";

export async function rootLoader() {
  try {
    const response = await fetch("https://trust-backend-jvcy.onrender.com");

    if (!response.ok) {
      throw new Error(`response status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error: any | unknown) {
    return `Error ${error.message}`;
  }
}

export default function RootRoute() {
  return (
    <div className="">
      <Navigation />
      <Outlet />
    </div>
  );
}
