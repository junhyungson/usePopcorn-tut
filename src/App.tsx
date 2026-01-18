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
import { useMovies } from "./hooks/useMovies";
import { tempWatchedData } from "./tempMoviedata";
import type { WatchedMovieData } from "./types/movie";

export default function App() {
  const [watched, setWatched] = useState<WatchedMovieData[]>(tempWatchedData);
  const [query, setQuery] = useState("");

  // Custom hook handles all movie fetching logic
  const { movies, isLoading, error } = useMovies(query);

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <SearchResults movies={movies} />
      </NavBar>
      <Main>
        <Container>
          {isLoading && <p>Loading...</p>}
          {error && <p style={{ color: "red" }}>Error: {error}</p>}
          {!isLoading && !error && <MovieList movies={movies} />}
        </Container>
        <Container>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </Container>
      </Main>
    </>
  );
}
