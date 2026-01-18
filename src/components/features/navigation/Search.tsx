import React from "react";

interface SearchProps {
  query: string;
  setQuery: (query: string) => void;
  onEnterSearch?: () => void; // Optional prop for Enter key search
}

const Search = ({ query, setQuery, onEnterSearch }: SearchProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onEnterSearch) {
      onEnterSearch();
    }
  };

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setQuery(e.target.value)
      }
      onKeyDown={handleKeyDown}
    />
  );
};

export default Search;
