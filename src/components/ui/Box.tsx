import { useState } from "react";
import type { Movie } from "../../types/movie";
import MovieList from "./MovieList";

interface ListBoxProps {
  movies: Movie[];
}

const ListBox = ({ movies }: ListBoxProps) => {
  const [isOpen1, setIsOpen1] = useState<boolean>(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open: boolean) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && <MovieList movies={movies} />}
    </div>
  );
};

export default ListBox;
