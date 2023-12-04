import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getFilmById } from 'API/api';
import { useEffect, useRef, useState, Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { MoviesCard } from 'components/MoviesCard/MoviesCard';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [film, setFilm] = useState([]);

  const location = useLocation();
  const backLinkRef = useRef(location);
  console.log(location);

  useEffect(() => {
    async function getFilm() {
      try {
        setFilm([]);
        setLoading(true);
        const searchFilm = await getFilmById(movieId);
        console.log(searchFilm);
        setFilm(searchFilm);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
    getFilm();
  }, [movieId]);

  return (
    <section>
      <Link to={backLinkRef.current.state?.from ?? '/movies'}>
        <b>Back to movies</b>
      </Link>

      <MoviesCard film={film} />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default MoviesDetails;
