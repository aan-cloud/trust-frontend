import {  Form } from "react-router-dom";

export default function Register() {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="space-y-6 w-full max-w-xs text-white flex flex-col items-start">
        <h1 className="text-xl font-medium">Register your new user account</h1>

        <Form
          method="post"
          className="w-full space-y-2 flex flex-col gap-3 font-extralight"
        >
          <div className="flex flex-col gap-[2px]">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              className="bg-transparent px-1 border border-[hsla(0deg,0%,98%,30%)] rounded-md py-[4px]"
              type="text"
              name="username"
              required
            />
          </div>

          <div className="flex flex-col gap-[2px]">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="bg-transparent px-1 border border-[hsla(0deg,0%,98%,30%)] rounded-md py-[4px]"
              type="email"
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
            Register New User
          </button>
        </Form>
      </div>
    </main>
  );
}
