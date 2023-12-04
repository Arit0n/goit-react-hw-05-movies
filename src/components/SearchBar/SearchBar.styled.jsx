import styled from 'styled-components';

import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  padding: 10px;
  display: flex;
  gap: 24px;
  justify-content: center;
`;

export const StyledField = styled(Field)`
  height: 40px;
  width: 240px;
  font-size: 18px;
  font-weight: 500;
  padding-left: 10px;
  border: 1px solid gray;
  border-radius: 8px;
`;

export const Button = styled.button`
  width: 84px;
  height: 40px;
  background-color: transparent;
  border: 1px solid gray;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;
