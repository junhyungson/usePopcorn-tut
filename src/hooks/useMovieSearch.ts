import { useCallback, useEffect, useState } from "react";
import { MovieService } from "../services/movieService";
import type { MovieData } from "../types/movie";
import { useDebounce } from "./useDebounce";

export function useMovieSearch(query: string) {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const debouncedQuery = useDebounce(query, 500);

  const searchMovies = useCallback(async (searchQuery: string) => {
    if (!MovieService.isValidQuery(searchQuery)) {
      setMovies([]);
      setError(null);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const results = await MovieService.searchMovies(searchQuery);
      setMovies(results);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    searchMovies(debouncedQuery);
  }, [debouncedQuery, searchMovies]);

  return {
    movies,
    isLoading,
    error,
    refetch: () => searchMovies(debouncedQuery),
  };
}
