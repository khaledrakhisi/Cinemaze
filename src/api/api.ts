const MOVIE_API_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=0711939789d03a8c0a723db295e9f198&language=en-US&query=";

export const fetchMovies = (queryString = "flower") =>
  fetch(`${MOVIE_API_URL}${queryString}&page=1&include_adult=true`).then(
    (response) => response.json()
  );
