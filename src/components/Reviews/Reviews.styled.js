import styled from 'styled-components';

export const ReviewsStyled = styled.ul`
  display: grid;
  gap: 12px;
`;

export const ReviewsListItem = styled.li`
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  gap: 12px;
  padding: 8px 0;

  &:not(:last-child) {
    border-bottom: 1px dashed slategrey;
  }
  & span {
    display: block;
    font-size: 14px;
    color: #666;
  }
`;
