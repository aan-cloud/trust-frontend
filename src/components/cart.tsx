import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <button id="cart" className="px-3 py-1 mr-5">
      <Link to={"/cart"}>
        <i className="fa-solid fa-cart-shopping"></i>
      </Link>
    </button>
  );
}
