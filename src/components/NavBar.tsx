import React, { useState } from "react";
import type { Movie } from "../types/movie";

interface NavBarProps {
  movies: Movie[];
}

const NavBar = ({ movies }: NavBarProps) => {
  const [query, setQuery] = useState("");

  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
      />
      <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
    </nav>
  );
};

export default NavBar;
