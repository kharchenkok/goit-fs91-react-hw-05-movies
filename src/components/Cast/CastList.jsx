import React from 'react';
import { BASE_IMG_URL } from '../../services/fetchMovies';
import defaultCast from '../../images/no-user.webp';
import { CastListItem, CastStyled } from './Cast.styled';

const CastList = ({ movieCast }) => {
  return (
    <CastStyled>
      {movieCast.map(({ id, name, profile_path = '' }) => (
        <CastListItem key={id}>
          <img
            src={profile_path ? `${BASE_IMG_URL}${profile_path}` : defaultCast}
            alt={name}
            width="250"
          />
          <h3>{name}</h3>
        </CastListItem>
      ))}
    </CastStyled>
  );
};
export default CastList;
