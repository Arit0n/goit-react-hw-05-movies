import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const WrapBox = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 20px;
`;

export const StyledLink = styled(Link)`
  font-size: 16px;
  margin-right: 5px;
  padding: 5px 15px;
  border: 1px solid #0d57aa;
  border-radius: 6px;
  background-color: #b5d1f2;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: #0d57aa;

  &:hover,
  &:focus {
    background-color: #0d57aa;
    color: #ffffff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  }
`;
