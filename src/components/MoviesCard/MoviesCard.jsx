import { Link, Outlet } from 'react-router-dom';

export const MoviesCard = ({ film }) => {
  const {
    original_title,
    overview,
    poster_path,
    genres,
    vote_average,
    release_date,
  } = film;
  const dateFilm = new Date(release_date);
  const releaseYear = isNaN(dateFilm) ? 'Unknown' : dateFilm.getFullYear();

  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';

  return (
    <>
      <img src={posterUrl} alt={original_title} />
      <h3>
        {original_title} ({releaseYear})
      </h3>
      <p>User score: {vote_average * 10}</p>
      <h3>Overwiev</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres?.map(genre => genre.name).join('  ')}</p>
      <h3>Additional information</h3>
      <Link to={'cast'}>Cast</Link>
      <Link to={'reviews'}>Reviews</Link>
      <Outlet />
    </>
  );
};
