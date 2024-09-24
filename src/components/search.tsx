export default function Search() {
  return (
    <div
      id="search"
      className="w-[300px] flex items-center gap-2 border border-[#6E6E6E] py-[4px] px-3 rounded-lg backdrop-blur-2xl lg:mr-2"
    >
      <i className="fa-solid text-sm fa-magnifying-glass text-[#7B7B7B]"></i>
      <input
        type="search"
        name=""
        id=""
        placeholder="Search"
        className="outline-none border-none w-full bg-transparent text-[#B4B4B4] text-sm placeholder:font-light placeholder:text-sm"
      />
    </div>
  );
}
