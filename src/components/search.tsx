export default function Search() {
  return (
    <div
      id="search"
      className="w-[250px] flex items-center gap-2 border border-[#D9D9D9] py-1 px-3 rounded-lg mr-16"
    >
      <i className="fa-solid fa-magnifying-glass text-slate-500"></i>
      <input
        type="search"
        name=""
        id=""
        placeholder="Search"
        className="outline-none border-none w-full"
      />
    </div>
  );
}
