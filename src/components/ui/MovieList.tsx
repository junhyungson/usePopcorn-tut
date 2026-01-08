import type { MovieData } from "../../types/movie";
import MovieCard from "./MovieCard";

interface MovieListProps {
  movies: MovieData[];
}
const MovieList = ({ movies }: MovieListProps) => {
  return (
    <ul className="list">
      {movies?.map((movie: MovieData) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
