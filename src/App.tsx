import { useEffect, useState } from "react";
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
import fetchMovie from "./fetchMovie";
import { tempWatchedData } from "./tempMoviedata";
import type { MovieData, WatchedMovieData } from "./types/movie";

export default function App() {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [watched, setWatched] = useState<WatchedMovieData[]>(tempWatchedData);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        setError(null);

        const fetchedMovies = await fetchMovie("inception");

        console.log("START INSIDE USEEFFECT");
        console.log("fetching movies", fetchedMovies);
        console.log("END INSIDE USEEFFECT");

        setMovies(fetchedMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError(error instanceof Error ? error.message : String(error));
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, []);

  return (
    <>
      <NavBar>
        <Logo />
        <Search />
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
