export type MovieData = {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
};

export type WatchedMovieData = MovieData & {
  runtime: number;
  imdbRating: number;
  userRating: number;
};