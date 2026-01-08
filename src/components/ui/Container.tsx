import { useState } from "react";
import type { MovieData } from "../../types/movie";
import { MovieList } from "../features/movies";

interface ContainerProps {
  movies: MovieData[];
}

const Container = ({ movies }: ContainerProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen((open: boolean) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && <MovieList movies={movies} />}
    </div>
  );
};

export default Container;
