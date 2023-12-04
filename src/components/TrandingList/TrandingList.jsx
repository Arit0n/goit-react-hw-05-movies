import {
  StyledSection,
  List,
  ListItem,
  StyledLink,
  StyledHeader,
} from 'components/TrandingList/TrandingList.styled';

export const TrandingList = ({ films }) => {
  return (
    <StyledSection>
      <StyledHeader>Tranding today</StyledHeader>
      <List>
        {films.map(item => (
          <ListItem key={item.id}>
            <StyledLink to={`/movies/${item.id}`}>
              {item.title || item.name}
            </StyledLink>
          </ListItem>
        ))}
      </List>
    </StyledSection>
  );
};
