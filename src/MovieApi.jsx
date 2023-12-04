const APIKey = "ecc4e7b06d773299c9fa9cf4f8fc620f";

const MovieApi = {
  Trending: `https://api.themoviedb.org/3/trending/all/week?api_key=${APIKey}&language=en-US`,
  NetflixOrginals: `https://api.themoviedb.org/3/discover/tv?api_key=${APIKey}&with_network=213`,
  TopRated: `https://api.themoviedb.org/3/movie/top-rated?api_key=${APIKey}&language=en-US`,
  movies: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&language=en-US`,
  ActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&with_genres=28`,
  ComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&with_genres=35`,
  horrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&with_genres=27`,
  Romancemovies: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&with_genres=10749`,
  Documentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&with_genres=99`,
};

export default MovieApi;
