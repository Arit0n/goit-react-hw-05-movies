import { Outlet } from 'react-router-dom';

import {
  WrapBox,
  FilmTitle,
  CardText,
  StyledHeaderCard,
  List,
  ListItem,
  StyledLink,
  StyledBox,
} from './MoviesCard.styled';

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
      <WrapBox>
        <img src={posterUrl} alt={original_title} />
        <div>
          <FilmTitle>
            {original_title} ({releaseYear})
          </FilmTitle>
          <CardText>User score: {(vote_average * 10).toFixed(0)}%</CardText>
          <StyledHeaderCard>Overwiev</StyledHeaderCard>
          <CardText>{overview}</CardText>
          <StyledHeaderCard>Genres</StyledHeaderCard>
          <CardText>{genres?.map(genre => genre.name).join('  ')}</CardText>
        </div>
      </WrapBox>
      <StyledBox>
        <h3>Additional information</h3>
        <List>
          <ListItem>
            <StyledLink to={'cast'}>Cast</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to={'reviews'}>Reviews</StyledLink>
          </ListItem>
        </List>
      </StyledBox>
    </>
  );
};
