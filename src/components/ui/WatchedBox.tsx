import { useState } from "react";
import { average } from "../../helper";
import type { WatchedMovieData } from "../../types/movie";

interface WatchedBoxProps {
  watched: WatchedMovieData[];
}

const WatchedBox = ({ watched }: WatchedBoxProps) => {
  const [isOpen2, setIsOpen2] = useState<boolean>(true);
  const avgImdbRating: number = average(
    watched.map((movie) => movie.imdbRating)
  );
  const avgUserRating: number = average(
    watched.map((movie) => movie.userRating)
  );
  const avgRuntime: number = average(watched.map((movie) => movie.runtime));

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open: boolean) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
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

          <ul className="list">
            {watched.map((movie: WatchedMovieData) => (
              <li key={movie.imdbID}>
                <img src={movie.Poster} alt={`${movie.Title} poster`} />
                <h3>{movie.Title}</h3>
                <div>
                  <p>
                    <span>⭐️</span>
                    <span>{movie.imdbRating}</span>
                  </p>
                  <p>
                    <span>🌟</span>
                    <span>{movie.userRating}</span>
                  </p>
                  <p>
                    <span>⏳</span>
                    <span>{movie.runtime} min</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default WatchedBox;
