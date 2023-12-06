import React from 'react';
import defaultPoster from '../../images/default-movie.jpg';
import { getDateYear } from '../../utils/GetDateYear';
import {
  MovieCardContainer,
  MovieCardInfo,
  MovieCardList,
  MovieCardListItem,
} from './MovieCard.styled';
import { SectionTitle } from '../Layout/Layout.styled';
import { FaCalendarAlt, FaFilm } from 'react-icons/fa';
import { MdAccessTimeFilled, MdStarRate } from 'react-icons/md';
import { BASE_IMG_URL } from '../../services/fetchMovies';

const MovieCard = ({ movie }) => {
  const {
    title,
    poster_path = '',
    overview,
    release_date,
    genres,
    vote_average,
    runtime,
  } = movie;

  const runtimeHours = Math.floor(runtime / 60);
  const runtimeMinutes = runtime % 60;

  return (
    <MovieCardContainer>
      <img
        src={poster_path ? `${BASE_IMG_URL}${poster_path}` : defaultPoster}
        alt={title}
        width="250"
      />
      <MovieCardInfo>
        <SectionTitle $titleunderline="false">{title}</SectionTitle>
        <MovieCardList>
          {release_date && (
            <MovieCardListItem>
              <FaCalendarAlt />
              <span>{getDateYear(release_date)}</span>
            </MovieCardListItem>
          )}

          {vote_average > 0 && (
            <MovieCardListItem>
              <MdStarRate />
              <span>{vote_average.toFixed(2)}</span>
            </MovieCardListItem>
          )}
          {(runtimeHours > 0 || runtimeMinutes > 0) && (
            <MovieCardListItem>
              <MdAccessTimeFilled />

              <span>
                {runtimeHours}h {runtimeMinutes}min
              </span>
            </MovieCardListItem>
          )}
          {genres && genres.length > 0 && (
            <MovieCardListItem>
              <FaFilm />

              <span>{genres && genres.map(({ name }) => name).join(' ')}</span>
            </MovieCardListItem>
          )}
        </MovieCardList>

        <p>{overview}</p>
      </MovieCardInfo>
    </MovieCardContainer>
  );
};
export default MovieCard;
