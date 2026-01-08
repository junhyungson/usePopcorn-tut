import type { MovieData } from "../../types/movie";

interface SearchResultsProps {
  movies: MovieData[];
}

const SearchResults = ({ movies }: SearchResultsProps) => {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
};

export default SearchResults;
