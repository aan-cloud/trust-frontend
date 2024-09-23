import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="w-1/3">
      <Link to="/" className="w-fit block">
      <img
        src="https://ucarecdn.com/714833c2-e319-4aa8-b734-ec9ef74e9bc5/"
        className="h-7 w-28"
      />
    </Link>
    </div>
  );
}
