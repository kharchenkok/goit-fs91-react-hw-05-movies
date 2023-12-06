import styled from 'styled-components';

export const CastStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  //grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
  gap: 10px;
`;

export const CastListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & img {
    border-radius: 16px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    aspect-ratio: 0.66/1;
    object-fit: cover;
    object-position: bottom;
  }

  & h3 {
    font-size: 12px;
    text-align: center;
  }
`;
