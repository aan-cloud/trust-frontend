import { Link } from "react-router-dom";

export default function Background() {
  return (
    <div className="relative w-full bg-[url('https://ucarecdn.com/08d6eb5b-0793-4cea-89c3-50a65642e698/freepikexport20241004015152nYMc.jpeg')] bg-cover bg-center h-screen')] h-[95vh] mt-16 flex justify-center">
      <div className="relative z-10 flex items-center w-fit flex-col justify-center gap-3 h-full">
        <h1 className="text-[rgb(255,255,255)] text-7xl font-bold font-poppins mb-3">
          Just believe <span className="underline">trust</span>
        </h1>
        <button className="w-fit h-[42px] text-[#e2e2e2] font-poppins text-base font-semibold backdrop-blur-md rounded-lg border border-[#9c9c9c] hover:ring-4 ring-2">
          <Link
            to={"/products"}
            className="w-full px-6 h-full flex items-center justify-center"
          >
            Explore Products
          </Link>
        </button>
      </div>

    </div>
  );
}
