import { useEffect, useState } from "react";
import fetchMovie from "../fetchMovie";
import type { MovieData } from "../types/movie";

export function useMovies(query: string) {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Don't fetch if query is less than 3 characters
    if (query.length < 3) {
      setMovies([]);
      setError(null);
      return;
    }

    async function getMovies() {
      try {
        setIsLoading(true);
        setError(null);

        const fetchedMovies = await fetchMovie(query);
        
        console.log("Fetching movies for:", query);
        console.log("Results:", fetchedMovies);
        
        setMovies(fetchedMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError(error instanceof Error ? error.message : String(error));
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, [query]);

  return { movies, isLoading, error };
}