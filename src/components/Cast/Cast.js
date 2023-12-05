import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCast } from '../../services/fetchMovies';
import { showError } from '../../utils/ToastNotification';

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
    <div>
      <ul>
        {movieCast.map(({ id, name, profile_path }) => (
          <li key={id}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/original/${profile_path}`}
                alt={name}
                width="250"
              />
              <h2>{name}</h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
