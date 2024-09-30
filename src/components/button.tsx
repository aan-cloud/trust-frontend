import { Link } from "react-router-dom";

export default function Button({ value }: any) {
  return (
    <Link
      to={`/${value}`}
      className="py-1 rounded-sm font-light text-sm px-1 text-[hsla(0deg,0%,98%,60%)] hover:text-[hsla(0deg,0%,98%,100%)]"
    >
      {value}
    </Link>
  );
}
