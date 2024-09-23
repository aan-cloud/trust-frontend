import { Link } from "react-router-dom"

export default function Background () {
    return (
       <div className="relative w-full bg-[url('https://ucarecdn.com/05bda61e-6da6-4e16-9d88-cbc57fd0de94/')] bg-cover bg-center h-screen')] h-screen">
  <div className="relative z-10 flex items-center p-20 flex-col justify-center h-full">
    <p className="text-[#B4B4B4] text-7xl font-bold font-poppins mb-3">Just believe <span className="underline">trust</span></p>
    <button className="w-[133px] h-[42px] text-[#EEEEF0] font-poppins text-base font-normal tracking-wide backdrop-blur-md rounded-lg border border-[#B4B4B4]">
      <Link to={'/products'} className="w-full h-full flex items-center justify-center">Explore</Link>
    </button>
  </div>
</div>
    )
}