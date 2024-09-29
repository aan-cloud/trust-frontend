import { useState } from "react";

interface SearchProps {
  onSearch: (searchTerm: string) => void;
  display: string
}

export default function Search({ onSearch, display }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className={`w-[300px] ${display} flex items-center gap-2 border border-[#6E6E6E] py-[4px] px-3 rounded-lg backdrop-blur-2xl lg:mr-2`}>
      <i className="fa-solid text-sm fa-magnifying-glass text-[#7B7B7B]"></i>
      <input
        type="search"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search"
        className={`outline-none border-none w-full bg-transparent text-[#B4B4B4] text-sm placeholder:font-light placeholder:text-sm`}
      />
    </form>
  );
}