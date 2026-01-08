export type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
};

export type Movies = Movie[];

export type WatchedMovie = Movie & {
  runtime: number;
  imdbRating: number;
  userRating: number;
};