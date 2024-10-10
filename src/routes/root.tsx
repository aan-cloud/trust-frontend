import { Outlet, useLoaderData } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import { auth } from "../libs/auth";
import Navigation from "../layouts/navigation";

export async function rootLoader() {
  const user = await auth.checkUser();

  if (!auth.isAuthenticated) {
    await auth.checkUser();
  }

  return {
    isAuthenticated: auth.isAuthenticated,
    user: user,
  };
}

export default function RootRoute() {
  const { isAuthenticated, user } = useLoaderData() as Awaited<ReturnType<typeof rootLoader>>;

  return (
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <div className="bg-[hsl(240,10%,3.9%)] min-h-screen min-w-full absolute -z-[100]">
        <Navigation isAuthenticated={isAuthenticated} user={user}/>
        <Outlet />
      </div>
    </CookiesProvider>
  );
}
