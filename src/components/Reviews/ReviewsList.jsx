import React from 'react';
import { formatDateString } from '../../utils/FormatDateString';
import { RenderContent } from '../../utils/RenderContent';
import { ReviewsListItem, ReviewsStyled } from './Reviews.styled';

const ReviewsList = ({ movieReview }) => {
  return (
    <ReviewsStyled>
      {movieReview.map(({ id, author, content, created_at }) => (
        <ReviewsListItem key={id}>
          <h3>
            {author} :
            {created_at && <span>{formatDateString(created_at)}</span>}
          </h3>
          {RenderContent(content)}
        </ReviewsListItem>
      ))}
    </ReviewsStyled>
  );
};
export default ReviewsList;
