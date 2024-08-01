import axios from "axios";

export async function getAllMovies(page) {
  const url = "https://api.themoviedb.org/3/trending/movie/day";

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5N2Q1NzA0NjZjMjkxMTdhOTNiZWI2Y2I5ZWE5ZDAzOSIsIm5iZiI6MTcyMjUyMzg1MC41OTA1MjMsInN1YiI6IjY2YWJhMDA0Y2YzYjlmMDZiOWIyODgzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DuQuEcgRYQqWpEkXPRNGCH7kjI9ik7sJMyZTmOPG1Ec",
    },
    params: { page },
  };

  const response = await axios.get(url, options);
  return response.data;
}

export async function getMovieById(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5N2Q1NzA0NjZjMjkxMTdhOTNiZWI2Y2I5ZWE5ZDAzOSIsIm5iZiI6MTcyMjUyMzg1MC41OTA1MjMsInN1YiI6IjY2YWJhMDA0Y2YzYjlmMDZiOWIyODgzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DuQuEcgRYQqWpEkXPRNGCH7kjI9ik7sJMyZTmOPG1Ec",
    },
  };

  const response = await axios.get(url, options);
  return response.data;
}

export async function getSimilarMovies(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/similar`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5N2Q1NzA0NjZjMjkxMTdhOTNiZWI2Y2I5ZWE5ZDAzOSIsIm5iZiI6MTcyMjUyMzg1MC41OTA1MjMsInN1YiI6IjY2YWJhMDA0Y2YzYjlmMDZiOWIyODgzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DuQuEcgRYQqWpEkXPRNGCH7kjI9ik7sJMyZTmOPG1Ec",
    },
  };

  const response = await axios.get(url, options);
  return response.data;
}

export async function getCastInfo(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5N2Q1NzA0NjZjMjkxMTdhOTNiZWI2Y2I5ZWE5ZDAzOSIsIm5iZiI6MTcyMjUyMzg1MC41OTA1MjMsInN1YiI6IjY2YWJhMDA0Y2YzYjlmMDZiOWIyODgzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DuQuEcgRYQqWpEkXPRNGCH7kjI9ik7sJMyZTmOPG1Ec",
    },
  };

  const response = await axios.get(url, options);

  return response.data;
}

export async function getReviews(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5N2Q1NzA0NjZjMjkxMTdhOTNiZWI2Y2I5ZWE5ZDAzOSIsIm5iZiI6MTcyMjUyMzg1MC41OTA1MjMsInN1YiI6IjY2YWJhMDA0Y2YzYjlmMDZiOWIyODgzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DuQuEcgRYQqWpEkXPRNGCH7kjI9ik7sJMyZTmOPG1Ec",
    },
  };

  const response = await axios.get(url, options);

  return response.data;
}

export async function getMovieByName(movieName, page) {
  const url = `https://api.themoviedb.org/3/search/movie`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5N2Q1NzA0NjZjMjkxMTdhOTNiZWI2Y2I5ZWE5ZDAzOSIsIm5iZiI6MTcyMjUyMzg1MC41OTA1MjMsInN1YiI6IjY2YWJhMDA0Y2YzYjlmMDZiOWIyODgzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DuQuEcgRYQqWpEkXPRNGCH7kjI9ik7sJMyZTmOPG1Ec",
    },
    params: {
      query: movieName,
      page,
    },
  };

  const response = await axios.get(url, options);

  return response.data;
}
