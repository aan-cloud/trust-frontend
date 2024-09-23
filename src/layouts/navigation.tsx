import Logo from "../components/logo";
import Category from "../components/category";
import Search from "../components/search";
import Button from "../components/button"

export default function Navigation() {
  return (
       <nav className="fixed top-0 left-0 w-full bg-opacity-30 bg-[#FFFFFF09] backdrop-blur-lg z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16 z-40 font-poppins px-5">
        <div className="flex justify-between gap-6">
          <Logo />
          <Category />
        </div>
        <div className="flex justify-between items-center gap-3">
          <Search/>
          <Button value="Register" />
          <Button value="Login"/>
        </div>
      </div>
    </div>
  </nav>
  );
}
