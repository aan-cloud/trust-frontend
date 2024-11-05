import { Form, redirect, useLoaderData } from "react-router-dom";
import { auth } from "../libs/auth";

export async function loader () {
  const user = await auth.checkUser();
  
  if(!user) return redirect("login");

  return { user }
}

export default function DashboardRoute() {
  const data = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  console.log('Loader data:', data);

  if (data instanceof Response) return null;

  return (
    <div className="py-28 w-screen">
      <div className="max-w-md mx-auto p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4 text-white">
          Personal information
        </h2>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-200 mb-1"
            htmlFor="fullName"
          >
            Username
          </label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a5 5 0 100 10A5 5 0 0010 2zM7 12a7 7 0 00-6 3.5A8 8 0 0010 18a8 8 0 009-2.5A7 7 0 0013 12H7z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              id="fullName"
              value={data.user.user.username}
              readOnly
              className="w-full outline-none text-gray-700"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-200 mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.94 4.94a8 8 0 0114.12 0L10 10.58 2.94 4.94zM10 11.42l-5.94 5.94a8 8 0 0011.88 0L10 11.42z" />
            </svg>
            <input
              type="email"
              id="email"
              value={data.user.user.email}
              readOnly
              className="w-full outline-none text-gray-700"
            />
          </div>
        </div>
        <Form method="post">
            <button
            type="submit"
            className="w-full py-2 bg-white mt-4 text-black rounded-md font-medium"
          >
            Logout
          </button>
        </Form>
      </div>
    </div>
  );
};

export function action() {
  auth.logout();
  return redirect("/login")
};
