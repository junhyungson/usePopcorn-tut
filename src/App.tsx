import { useState } from "react";
import "./App.css";
import { Logo } from "./components";
import {
  NavBar,
  Search,
  SearchResults,
} from "./components/features/navigation";
import { Main } from "./components/layout";
import { tempMovieData } from "./tempMoviedata";
import type { MovieData } from "./types/movie";

export default function App() {
  const [movies, _setMovies] = useState<MovieData[]>(tempMovieData);

  return (
    <>
      <NavBar>
        <Logo />
        <Search />
        <SearchResults movies={movies} />
      </NavBar>
      <Main movies={movies} />
    </>
  );
}
