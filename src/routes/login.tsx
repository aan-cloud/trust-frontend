import { Form, redirect, ActionFunctionArgs } from "react-router-dom";
import { auth } from "../libs/auth";


export async function loader() {
  const user = await auth.checkUser();
  if (user) return redirect("/dashboard");
  return null;
};


export default function Login() {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="space-y-6 w-full max-w-xs text-white flex flex-col items-start">
        <h1 className="text-xl font-medium">Login to your account</h1>

        <Form
          method="post"
          className="w-full space-y-2 flex flex-col gap-3 font-extralight"
        >
          <div className="flex flex-col gap-[2px]">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="bg-transparent px-1 border border-[hsla(0deg,0%,98%,30%)] rounded-md py-[4px]"
              type="text"
              name="email"
              required
            />
          </div>
          <div className="flex flex-col  gap-[2px]">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="bg-transparent px-1 border border-[hsla(0deg,0%,98%,30%)] rounded-md py-[4px]"
              type="password"
              name="password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-white text-black rounded-md font-medium"
          >
            Login
          </button>
        </Form>
      </div>
    </main>
  );
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const userLogin = {
    email: String(formData.get("email")),
    password: String(formData.get("password")),
  };

  const result = await auth.login(userLogin);
  if (!result) return null;

  return redirect("/dashboard");
};
