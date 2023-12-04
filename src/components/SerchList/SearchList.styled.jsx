import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledSection = styled.section`
  padding-right: 50px;
  padding-left: 50px;
`;

export const List = styled.ul`
  color: #0d57aa;
`;
export const ListItem = styled.li`
  list-style: disc;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
export const StyledLink = styled(Link)`
  font-size: 20px;
  color: #0d57aa;
  transition: color 0.2s ease-in-out, border-bottom 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: #1c85ff;
    border-bottom: 2px solid #1c85ff;
  }
`;
