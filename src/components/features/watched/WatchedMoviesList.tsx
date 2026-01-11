import type { WatchedMovieData } from "../../../types/movie";
import WatchedMovie from "./WatchedMovie";

interface WatchedMoviesListProps {
  watched: WatchedMovieData[];
}

const WatchedMoviesList = ({ watched }: WatchedMoviesListProps) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default WatchedMoviesList;
