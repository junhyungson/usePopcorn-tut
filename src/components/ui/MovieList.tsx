import type { Movie } from "../../types/movie";

interface MovieListProps {
  movies: Movie[];
}
const MovieList = ({ movies }: MovieListProps) => {
  return (
    <ul className="list">
      {movies?.map((movie: Movie) => (
        <li key={movie.imdbID}>
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
          <h3>{movie.Title}</h3>
          <div>
            <p>
              <span>🗓</span>
              <span>{movie.Year}</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
