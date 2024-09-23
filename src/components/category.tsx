import { Link } from "react-router-dom";
import categorys from "../types/categorys";

const categories: categorys = {
  battery: "battery",
  lamp: "lamp",
  cooler: "cooler",
  tire: "tire",
  cable: "cable",
  brake: "brake",
};

export default function Category() {
  return (
    <ul className="flex items-center gap-4 text-sm  text-[hsla(0deg,0%,98%,60%)]">
      <li className="font-medium hover:text-[hsla(0deg,0%,98%,100%)]">
        <Link to={`/products`}> Products </Link>
      </li>
      <li className="font-medium hover:text-[hsla(0deg,0%,98%,100%)]">
        <Link to={`/${categories.battery}`}> Battery </Link>
      </li>
      <li className="font-medium hover:text-[hsla(0deg,0%,98%,100%)]">
        <Link to={`/${categories.lamp}`}> Lamp </Link>
      </li>
      <li className="font-medium hover:text-[hsla(0deg,0%,98%,100%)]">
        <Link to={`/${categories.cooler}`}> Cooler </Link>
      </li>
      <li className="font-medium hover:text-[hsla(0deg,0%,98%,100%)]">
        <Link to={`/${categories.tire}`}> Tire </Link>
      </li>
      <li className="font-medium hover:text-[hsla(0deg,0%,98%,100%)]">
        <Link to={`/${categories.cable}`}> Cable </Link>
      </li>
      <li className="font-medium hover:text-[hsla(0deg,0%,98%,100%)]">
        <Link to={`/${categories.brake}`}> Brake </Link>
      </li>
    </ul>
  );
}
