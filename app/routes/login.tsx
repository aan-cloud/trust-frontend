import { Form, Link } from "@remix-run/react";

import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";

import Footer from "~/shared/footer";

export default function Login() {
  return (
    <>
      <section className="min-h-[calc(100vh-150px)] bg-[#d6d6d6] flex items-center">
        <div className="w-[30%] px-11 py-6 m-auto bg-white rounded-md shadow-md">
          <h1 className="text-2xl font-semibold text-center mb-4">Login</h1>
          <Form method="post" className="flex flex-col gap-2">
            <span>
              <Label htmlFor="username">Username</Label>
              <Input
                placeholder="Enter Username or Email"
                id="username"
                name="username"
                type="text"
                className=""
              />
            </span>
            <span>
              <Label htmlFor="password">Password</Label>
              <Input
                placeholder="Enter Password"
                id="password"
                name="password"
                type="password"
                className=""
              />
            </span>
            <Button className="bg-theme-1 mt-4" type="submit">
              Login
            </Button>
          </Form>
          <div className="flex justify-center items-center mt-5 gap-2">
            <small className="">Don't have any account yet?</small>
            <Link
              className="text-blue-800 decoration-solid underline text-sm"
              to={"/register"}
            >
              Register
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
