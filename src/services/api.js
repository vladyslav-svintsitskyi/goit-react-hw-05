import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjM2MDM1MzQxMzYzNjA3NzIzNzZhYmEyMzU0MDc3MCIsIm5iZiI6MTczNjU5OTYyMS41NDgsInN1YiI6IjY3ODI2ODQ1OGMyMzA5Y2VhZmJhZjc3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cDAH8LiYaZtYscaS4uIHpwHhWMoC9GgL-88w2HRSCN8";
const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

axios.defaults.baseURL = "https://api.themoviedb.org";

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    "/3/trending/movie/day?language=en-US",
    options
  );
  return data.results;
};

export const fetchMovieByID = async (id) => {
  const { data } = await axios.get(`/3/movie/${id}`, options);
  return data;
};

export const fetchCastByUserId = async (id) => {
  const { data } = await axios.get(`/3/movie/${id}/credits`, options);
  return data.cast;
};

export const fetchReviewsByUserId = async (id) => {
  const { data } = await axios.get(`/3/movie/${id}/reviews`, options);
  return data.results;
};

export const fetchMoviesByTitle = async (query) => {
  const { data } = await axios.get(`/3/search/movie`, {
    params: {
      query,
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return data.results;
};
