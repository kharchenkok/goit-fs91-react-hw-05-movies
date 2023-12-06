import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  //grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
`;

export const Overlay = styled.div`
  padding: 10px;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  color: white;

  background: linear-gradient(
    to bottom,
    rgba(36, 36, 62, 0.9),
    rgba(15, 12, 41, 1)
  );
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;

  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  transition: all 250ms ease-in-out;

  & img {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    aspect-ratio: 0.66/1;
    object-fit: cover;
    object-position: center;
  }

  & h2 {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.5;
    text-align: center;

    & span {
      color: #f65261;
    }
  }

  &:hover {
    transform: scale3d(1.05, 1.05, 1.05);
  }
`;
