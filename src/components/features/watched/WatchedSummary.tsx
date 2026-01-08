import { average } from "../../../helper";
import type { WatchedMovieData } from "../../../types/movie";

interface WatchedSummaryProps {
  watched: WatchedMovieData[];
}

const WatchedSummary = ({ watched }: WatchedSummaryProps) => {
  const avgImdbRating: number = average(
    watched.map((movie) => movie.imdbRating)
  );
  const avgUserRating: number = average(
    watched.map((movie) => movie.userRating)
  );
  const avgRuntime: number = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
};

export default WatchedSummary;
