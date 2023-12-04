import axios from 'axios';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjY5NDk2ZDc1Mzk0ZTliMTQ2NWJmYzc3Mzc5OGE4NSIsInN1YiI6IjY0YzNjMDgxZWMzNzBjMDBjNTZhOTU0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xkdg2IbTLBAaEJ9DsaPevd9dysMr2OPR_oZKuDZdofQ',
  },
};
export async function getTopFilm() {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/all/day?language=en-US',
    options
  );
  console.log(response.data);
  return response.data;
}
export async function getSearch(search) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`,
    options
  );
  console.log(response.data);
  return response.data;
}
export async function getFilmById(id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  );
  console.log(response.data);
  return response.data;
}
export async function getFilmCastById(id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    options
  );
  console.log(response.data);
  return response.data;
}

export async function getFilmReviewsById(id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
    options
  );
  console.log(response.data);
  return response.data;
}
