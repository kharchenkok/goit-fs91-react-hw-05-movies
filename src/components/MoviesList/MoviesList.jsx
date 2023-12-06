import React from 'react';

import { getDateYear } from '../../utils/GetDateYear';
import { List, Overlay, StyledLink } from './MoviesList.styled';

import defaultPoster from '../../images/default-movie.jpg';
import { BASE_IMG_URL } from '../../services/fetchMovies';

const MoviesList = ({ movies, location }) => {
  return (
    <List>
      {movies.map(({ id, poster_path = '', title, release_date }) => (
        <li key={id}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={
                poster_path ? `${BASE_IMG_URL}${poster_path}` : defaultPoster
              }
              alt={title}
              width="250"
            />
            <Overlay>
              <h2>
                {title}
                {release_date && <span>({getDateYear(release_date)})</span>}
              </h2>
            </Overlay>
          </StyledLink>
        </li>
      ))}
    </List>
  );
};
export default MoviesList;
