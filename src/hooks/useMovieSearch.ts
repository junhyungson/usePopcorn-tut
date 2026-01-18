import { useCallback, useEffect, useState } from "react";
import fetchMovie from "../fetchMovie";
import type { MovieData } from "../types/movie";

export function useMovieSearch(query: string) {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchMovies = useCallback(async (searchQuery: string) => {
    if (searchQuery.length < 3) {
      setMovies([]);
      setError(null);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const fetchedMovies = await fetchMovie(searchQuery);
      console.log("Fetching movies for:", searchQuery);
      console.log("Results:", fetchedMovies);
      setMovies(fetchedMovies);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Debounced search on query change
  useEffect(() => {
    if (query.length < 3) {
      setMovies([]);
      setError(null);
      return;
    }

    // Debounce the API call
    const timeoutId = setTimeout(() => {
      searchMovies(query);
    }, 500); // Wait 500ms after user stops typing

    // Cleanup function to cancel the timeout if query changes
    return () => clearTimeout(timeoutId);
  }, [query, searchMovies]);

  // Function to immediately search (for Enter key)
  const searchImmediately = useCallback(() => {
    searchMovies(query);
  }, [query, searchMovies]);

  return {
    movies,
    isLoading,
    error,
    searchImmediately,
    refetch: () => searchMovies(query),
  };
}
