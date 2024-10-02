import { Link } from "react-router-dom";

export default function Background() {
  return (
    <div className="relative w-full bg-[url('https://ucarecdn.com/05bda61e-6da6-4e16-9d88-cbc57fd0de94/')] bg-cover bg-center h-screen')] h-screen flex justify-center">
      <div className="relative z-10 flex items-center w-fit flex-col justify-center gap-3 h-full">
        <h1 className="text-[rgb(255,255,255)] text-7xl font-bold font-poppins mb-3">
          Just believe <span className="underline">trust</span>
        </h1>
        <p className="text-[#ffffff] w-[650px] text-base text-center font-poppins font-extralight mb-6">Trust will help you find quality spare parts from trusted manufacturers, we are connected to more than 5 of the best spare parts manufacturers in Malaysia</p>
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
