import React from "react";

interface SearchProps {
  query: string;
  setQuery: (query: string) => void;
}

const Search = ({ query, setQuery }: SearchProps) => {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setQuery(e.target.value)
      }
    />
  );
};

export default Search;
