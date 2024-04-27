import axios from 'axios';



const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGRhNGI3NDgyNzgxNjc2YTI2N2VjNmY5MDFjZjZmMyIsInN1YiI6IjY2MmJkYzM1YzFmZmJkMDExZjZjMzRlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aMDOij6Cwfu-Ts4-hqSGhKYW8iaohxF9spfWv69GyGQ',
  },
};

export const requestTrendingMovies = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  );
  return response.data;
};

export const requestMovieById = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
  return response.data;
};

export const requestCastById = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    options
  );
  return response.data.cast;
};

export const requestReviewsById = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    options
  );
  return response.data.results;
};

export const requestMovieByQuery = async query => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US`,
    options
  );
  return response.data.results;
};