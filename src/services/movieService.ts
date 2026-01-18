import fetchMovie from "../fetchMovie";
import type { MovieData } from "../types/movie";

export class MovieService {
  static async searchMovies(query: string): Promise<MovieData[]> {
    if (query.length < 3) {
      return [];
    }

    console.log("Searching movies for:", query);
    const movies = await fetchMovie(query);
    console.log("Search results:", movies);
    return movies;
  }

  static isValidQuery(query: string): boolean {
    return query.length >= 3;
  }
}
