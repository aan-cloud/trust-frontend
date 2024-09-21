import Logo from "../components/logo";
import Category from "../components/category";
import Search from "../components/search";
import Cart from "../components/cart";
import User from "../components/user";

export default function Navigation() {
  return (
    <nav className="flex items-center py-5 px-16 border-b border-[#D9D9D9] ">
      <Logo />
      <Category />
      <Search />
      <Cart />
      <User />
    </nav>
  );
}
