import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <button id="cart" className="px-3 py-1">
      <Link to={"/cart"}>
        <i className="fa-solid fa-cart-shopping text-[#B4B4B4] hover:text-[hsla(0deg,0%,98%,100%)]"></i>
      </Link>
    </button>
  );
}
