import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from '../../services/fetchMovies';
import { Suspense, useEffect, useRef, useState } from 'react';
import { showError } from '../../utils/ToastNotification';
import Loader from '../../components/Loader';

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

  const {
    title,
    poster_path = '',
    overview,
    release_date,
    genres,
    vote_average,
    runtime,
  } = movie;
  const releaseYear = new Date(release_date).getFullYear();
  const runtimeHours = Math.floor(runtime / 60);
  const runtimeMinutes = runtime % 60;

  const imgSrc = poster_path
    ? `https://image.tmdb.org/t/p/original/${poster_path}`
    : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg';

  return (
    <>
      <Link to={backLinkLocation.current}>Back</Link>
      <div>
        <img src={imgSrc} alt={title} width="250" />

        <h2>
          {title}({releaseYear})
        </h2>
        <p>Overview:{overview}</p>
        <p>Genres:{genres && genres.map(({ name }) => name).join(', ')}</p>
        <p>User score:{vote_average}</p>
        <p>
          Time:{runtimeHours}h {runtimeMinutes}
        </p>
      </div>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
