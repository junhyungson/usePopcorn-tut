const apiKey = import.meta.env.VITE_OMDB_API;

async function fetchMovie(title: string) {
  const BASE_URL = "www.omdbapi.com/";

  if (!apiKey) {
    throw new Error("API key not found");
  }

  const response = await fetch(
    `https://${BASE_URL}?apikey=${apiKey}&s=${encodeURIComponent(title)}`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.Search || [];
}
export default fetchMovie;
