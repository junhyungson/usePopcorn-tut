import { useState } from "react";
import type { WatchedMovieData } from "../../../types/movie";
import WatchedMovie from "./WatchedMovie";
import WatchedSummary from "./WatchedSummary";

interface WatchedBoxProps {
  watched: WatchedMovieData[];
}

const WatchedBox = ({ watched }: WatchedBoxProps) => {
  const [isOpen2, setIsOpen2] = useState<boolean>(true);

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
          <WatchedSummary watched={watched} />

          <ul className="list">
            {watched.map((movie: WatchedMovieData) => (
              <WatchedMovie key={movie.imdbID} movie={movie} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default WatchedBox;
