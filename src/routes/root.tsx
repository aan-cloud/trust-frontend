import { Outlet } from "react-router-dom";
import Navigation from "../layouts/navigation";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export async function rootLoader() {
  try {
    const response = await fetch(backendUrl);

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
    <div className="bg-[hsl(240,10%,3.9%)] min-h-screen min-w-full absolute -z-[100]">
      <Navigation />
      <Outlet />
    </div>
  );
}
