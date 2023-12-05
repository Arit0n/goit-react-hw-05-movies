import { useLocation } from 'react-router-dom';
import { StyledSection, List, ListItem, StyledLink } from './SearchList.styled';

export const SearchList = ({ film }) => {
  const location = useLocation();

  return (
    <StyledSection>
      <List>
        {film.map(({ id, original_title }) => {
          return (
            <ListItem key={id}>
              <StyledLink to={`/movies/${id}`} state={{ from: location }}>
                {original_title}
              </StyledLink>
            </ListItem>
          );
        })}
      </List>
    </StyledSection>
  );
};
