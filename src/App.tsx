import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import { tempMovieData } from "./tempMoviedata";
import type { MovieData } from "./types/movie";

export default function App() {
  const [movies, _setMovies] = useState<MovieData[]>(tempMovieData);

  return (
    <>
      <NavBar movies={movies} />
      <Main movies={movies} />
    </>
  );
}
