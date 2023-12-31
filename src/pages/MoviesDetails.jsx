import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getFilmById } from 'API/api';
import { useEffect, useRef, useState, Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { MoviesCard } from 'components/MoviesCard/MoviesCard';

import { Button, StyledSection } from './MoviesDetails.styled';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState([]);

  const location = useLocation();
  const backLinkRef = useRef(location);

  useEffect(() => {
    async function getFilm(id) {
      try {
        setFilm([]);
        const searchFilm = await getFilmById(id);
        setFilm(searchFilm);
      } catch (error) {}
    }
    getFilm(movieId);
  }, [movieId]);

  return (
    <StyledSection>
      <Button>
        <Link to={backLinkRef.current.state?.from ?? '/movies'}>
          <b>Back to movies</b>
        </Link>
      </Button>
      <MoviesCard film={film} />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </StyledSection>
  );
};

export default MoviesDetails;
