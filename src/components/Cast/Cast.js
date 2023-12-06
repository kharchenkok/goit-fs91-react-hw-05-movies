import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCast } from '../../services/fetchMovies';
import { showError } from '../../utils/ToastNotification';
import CastList from './CastList.jsx';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCast = () => {
      getMovieCast(movieId)
        .then(({ cast }) => {
          const slicedArray = cast.slice(0, 10);
          setMovieCast(slicedArray);
        })
        .catch(error => showError(error.message));
    };
    fetchMovieCast();
  }, [movieId]);

  return (
    <>
      {movieCast && movieCast.length > 0 ? (
        <CastList movieCast={movieCast} />
      ) : (
        <p> No information about casts</p>
      )}
    </>
  );
};

export default Cast;
