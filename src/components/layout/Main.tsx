import { useState } from "react";
import { tempWatchedData } from "../../tempMoviedata";
import type { MovieData, WatchedMovieData } from "../../types/movie";
import { WatchedBox } from "../features/watched";
import { Container } from "../ui";

interface MainProps {
  movies: MovieData[];
}

const Main = ({ movies }: MainProps) => {
  const [watched, _setWatched] = useState<WatchedMovieData[]>(tempWatchedData);

  return (
    <main className="main">
      <Container movies={movies} />
      <WatchedBox watched={watched} />
    </main>
  );
};

export default Main;
