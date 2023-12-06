import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original/';

const API_KEY = 'cd39124e196d97716b8c0c326a9e8fad';
const TRENDING_ENDPOINT = 'trending/movie/day';
const MOVIE_ENDPOINT = 'movie';
const CAST_ENDPOINT = 'credits';
const REVIEWS_ENDPOINT = 'reviews';
const SEARCH_ENDPOINT = 'search/movie';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`${TRENDING_ENDPOINT}?api_key=${API_KEY}`);
  return data;
};

export const getMovieById = async id => {
  const { data } = await axios.get(
    `${MOVIE_ENDPOINT}/${id}?api_key=${API_KEY}`
  );
  return data;
};

export const getMovieCast = async id => {
  const { data } = await axios.get(
    `${MOVIE_ENDPOINT}/${id}/${CAST_ENDPOINT}?api_key=${API_KEY}`
  );
  return data;
};
export const getMovieReviews = async id => {
  const { data } = await axios.get(
    `${MOVIE_ENDPOINT}/${id}/${REVIEWS_ENDPOINT}?api_key=${API_KEY}`
  );
  return data;
};

export const getSearchMovies = async query => {
  const { data } = await axios.get(
    `${SEARCH_ENDPOINT}?query=${query}&api_key=${API_KEY}`
  );
  return data;
};
