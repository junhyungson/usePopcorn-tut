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
import { tempMovieData, tempWatchedData } from "./tempMoviedata";
import type { MovieData, WatchedMovieData } from "./types/movie";

export default function App() {
  const [movies, setMovies] = useState<MovieData[]>(tempMovieData);
  const [watched, setWatched] = useState<WatchedMovieData[]>(tempWatchedData);

  useEffect(() => {
    async function getMovies() {
      try {
        const fetchedMovies = await fetchMovie("inception");
        console.log("inside getmovies");
        console.log("fetching movies", fetchedMovies);
        setMovies(fetchedMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
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
