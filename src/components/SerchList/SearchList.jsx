import { StyledSection, List, ListItem, StyledLink } from './SearchList.styled';

export const SearchList = ({ film }) => {
  return (
    <StyledSection>
      <List>
        {film.map(({ id, poster_path, original_title }) => {
          return (
            <ListItem key={id}>
              <StyledLink to={`/movies/${id}`}>{original_title}</StyledLink>
            </ListItem>
          );
        })}
      </List>
    </StyledSection>
  );
};
