import {
  StyledSection,
  List,
  ListItem,
  StyledLink,
  StyledHeader,
} from 'components/TrandingList/TrandingList.styled';
import { useLocation } from 'react-router-dom';

export const TrandingList = ({ films }) => {
  const location = useLocation();
  console.log(location);
  return (
    <StyledSection>
      <StyledHeader>Tranding today</StyledHeader>
      <List>
        {films.map(item => (
          <ListItem key={item.id}>
            <StyledLink to={`/movies/${item.id}`} state={{ from: location }}>
              {item.title || item.name}
            </StyledLink>
          </ListItem>
        ))}
      </List>
    </StyledSection>
  );
};
