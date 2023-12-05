import { useCallback, useEffect, useState } from 'react';
import { getSearchMovies } from '../../services/fetchMovies';
import { showError } from '../../utils/ToastNotification';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const userSearch = searchParams.get('query') || '';

  const [searchParams, setSearchParams] = useSearchParams();
  const [userSearch, setUserSearch] = useState(searchParams.get('query') || '');

  // const updateSearchString = event => {
  //   const { value } = event.target;
  //   if (value === '') return setSearchParams({});
  //
  //   setSearchParams({ query: value });
  // };

  const updateSearchString = event => {
    const { value } = event.target;
    // if (value === '') return setSearchParams({});
    setUserSearch(value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    fetchSearchMovies();
  };
  const fetchSearchMovies = useCallback(() => {
    getSearchMovies(userSearch)
      .then(({ results }) => {
        console.log('data', results);
        setMovies(results);
      })
      .catch(error => showError(error.message));
  }, [userSearch]);

  useEffect(() => {
    if (userSearch === '') return setMovies([]);
    fetchSearchMovies();
  }, [fetchSearchMovies]);

  return (
    <div>
      Movies
      <form onSubmit={handleFormSubmit}>
        <input type={'text'} value={userSearch} onChange={updateSearchString} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(({ id, title, release_date, poster_path }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                  alt={title}
                  width="250"
                />
                <h2>{title}</h2>
                <p>Release date:{release_date}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
