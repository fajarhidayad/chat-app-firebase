import React from "react";
import { FaSearch } from "react-icons/fa";

interface SearchInputProps {
  value: string;
  setValue: (input: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  setValue,
}) => {
  return (
    <div className="bg-grey-1 text-white flex rounded-lg p-3 items-center space-x-3">
      <label htmlFor="search">
        <FaSearch />
      </label>
      <input
        type="text"
        id="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex-1 focus:outline-none bg-transparent"
        placeholder="Search"
      />
    </div>
  );
};
