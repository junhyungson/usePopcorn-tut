import { useState } from "react";
import { tempWatchedData } from "../tempMoviedata";
import type { Movie, WatchedMovie } from "../types/movie";
import ListBox from "./ui/Box";
import WatchedBox from "./ui/WatchedBox";

interface MainProps {
  movies: Movie[];
}

const Main = ({ movies }: MainProps) => {
  const [watched, _setWatched] = useState<WatchedMovie[]>(tempWatchedData);

  return (
    <main className="main">
      <ListBox movies={movies} />
      <WatchedBox watched={watched} />
    </main>
  );
};

export default Main;
