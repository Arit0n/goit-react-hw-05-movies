import styled from 'styled-components';
export const CastSection = styled.section`
  padding: 20px 0px;
`;
export const CastHeader = styled.h2`
  font-size: 25px;
  font-weight: 500;
  text-align: center;
`;
export const List = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;

export const Item = styled.li`
  outline: 1px black;
  max-width: 200px;
`;

export const Text = styled.p`
  overflow-wrap: break-word;
  margin-top: 8px;
  color: rgb(17, 17, 17);
  text-align: center;
`;
