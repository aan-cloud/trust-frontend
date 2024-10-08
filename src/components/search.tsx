import { useState } from "react";

interface SearchProps {
  onSearch: (searchTerm: string) => void;
}

export default function Search({ onSearch }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-[30vw] flex items-center gap-2 border border-[#7B7B7B] py-[8px] px-4 rounded-lg backdrop-blur-2xl lg:mr-2`}
    >
      <i className="fa-solid text-sm fa-magnifying-glass text-[#EEEEEE]"></i>
      <input
        type="search"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search Product"
        className={`outline-none border-none w-full bg-transparent text-white text-sm pl-1 placeholder:font-normal placeholder:text-sm`}
      />
    </form>
  );
}
