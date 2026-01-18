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
import { useMovieSearch } from "./hooks/useMovieSearch"; // Updated import
import { tempWatchedData } from "./tempMoviedata";
import type { WatchedMovieData } from "./types/movie";

export default function App() {
  const [watched, setWatched] = useState<WatchedMovieData[]>(tempWatchedData);
  const [query, setQuery] = useState("");

  // More specific and feature-rich hook
  const { movies, isLoading, error, searchImmediately } = useMovieSearch(query);

  return (
    <>
      <NavBar>
        <Logo />
        <Search
          query={query}
          setQuery={setQuery}
          onEnterSearch={searchImmediately}
        />
        <SearchResults movies={movies} />
      </NavBar>
      <Main>
        <Container>
          {isLoading && <p>Loading...</p>}
          {error && (
            <div style={{ color: "red" }}>
              <p>Error: {error}</p>
              <button onClick={refetch}>Retry</button>
            </div>
          )}
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
