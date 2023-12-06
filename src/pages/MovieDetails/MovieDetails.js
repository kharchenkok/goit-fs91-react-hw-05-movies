import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from '../../services/fetchMovies';
import { Suspense, useEffect, useRef, useState } from 'react';
import { showError } from '../../utils/ToastNotification';

import Loader from '../../components/Loader';
import MovieCard from '../../components/MovieCard';
import { NavbarInfo } from '../../components/Navbar';
import { ButtonBack } from '../../components/Buttons';

import { Section, SectionTitle } from '../../components/Layout/Layout.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMovie = () => {
      getMovieById(movieId)
        .then(data => {
          setMovie(data);
        })
        .catch(error => showError(error.message));
    };
    fetchMovie();
  }, [movieId]);

  return (
    <>
      <Section>
        <ButtonBack backLink={backLinkLocation.current} />
        <MovieCard movie={movie} />
      </Section>
      <Section>
        <SectionTitle $titlesize="24px"> Additional information</SectionTitle>
        <NavbarInfo />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Section>
    </>
  );
};

export default MovieDetails;
