import Logo from "../components/logo";
import Category from "../components/category";
import Button from "../components/button";
import User from "../components/user";
import CartIcon from "../components/cartIcon";
import { useState } from "react";

export default function Navigation() {
  const [token, ] = useState(true);
  return (
    <nav className="fixed top-0 left-0 w-full bg-opacity-30 bg-[#FFFFFF09] backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between items-center h-16 z-40 font-poppins px-5">
          <Logo />
          <Category />
          <div className="flex justify-between items-center gap-3">
            {token ? (
              <>
                <CartIcon />
                <User />
              </>
            ) : (
              <>
                <Button value="Register" />
                <Button value="Login" />
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
