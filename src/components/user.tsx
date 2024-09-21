import { Link } from "react-router-dom";

export default function User() {
  return (
    <button id="user" className="px-3 py-1">
      <Link to={"/user"}>
        <i className="fa-solid fa-user"></i>
      </Link>
    </button>
  );
}
