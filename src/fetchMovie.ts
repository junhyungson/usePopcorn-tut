const apiKey = import.meta.env.VITE_OMDB_API;

async function fetchMovie(title: string) {
  const BASE_URL = "www.omdbapi.com/";
  const response = await fetch(
    `?apikey=${apiKey}s=${encodeURIComponent(title)}`
  );
  const data = await response.json();
  return data;
}
export default fetchMovie;
