import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonLink = styled(Link)`
  padding: 8px 16px;
  display: inline-flex;
  max-width: 120px;
  gap: 8px;
  color: white;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 4px;
  border: none;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const BackLink = styled(ButtonLink)`
  background-color: #f65261;

  &:hover {
    background-color: #dd4957;
  }
`;

export const ButtonSearchStyled = styled(ButtonLink)`
  background-color: teal;

  &:hover {
    background-color: #007373;
  }
`;
