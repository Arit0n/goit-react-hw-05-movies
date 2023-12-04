import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'GlobalStyle';

const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const HomePage = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MoviesDetails = lazy(() => import('pages/MoviesDetails'));
const Reviews = lazy(() => import('./reviews/Reviews'));
const Cast = lazy(() => import('./cast/cast'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
        </Route>
      </Routes>
      <GlobalStyle />
    </div>
  );
};
