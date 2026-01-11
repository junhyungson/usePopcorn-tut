import { useState } from "react";
import "./App.css";
import {
  Container,
  Logo,
  MovieList,
  WatchedMoviesList,
  WatchedSummary,
} from "./components";
import {
  NavBar,
  Search,
  SearchResults,
} from "./components/features/navigation";
import { Main } from "./components/layout";
import { tempMovieData, tempWatchedData } from "./tempMoviedata";
import type { MovieData, WatchedMovieData } from "./types/movie";

export default function App() {
  const [movies, _setMovies] = useState<MovieData[]>(tempMovieData);

  const [watched, _setWatched] = useState<WatchedMovieData[]>(tempWatchedData);
  return (
    <>
      <NavBar>
        <Logo />
        <Search />
        <SearchResults movies={movies} />
      </NavBar>
      <Main>
        <Container>
          <MovieList movies={movies} />
        </Container>
        <Container>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </Container>
      </Main>
    </>
  );
}
