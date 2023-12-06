import styled from 'styled-components';

export const MovieCardContainer = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  gap: 30px;
  max-width: 80%;
  margin: 0 auto;

  & > img {
    border-radius: 16px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  //& h2 {
  //  grid-area: 1/ 1 / 2 / 3;
  //}
`;

export const MovieCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 30px;
  font-size: 20px;
`;

export const MovieCardList = styled.ul`
  display: flex;
  gap: 10px;
  color: darkgray;
  font-size: 16px;
`;

export const MovieCardListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  padding-right: 15px;
  &:not(:last-child) {
    border-right: 1px solid #f65261;
  }

  & span {
    //color: lightslategrey;
    color: #24243e;
  }
`;
