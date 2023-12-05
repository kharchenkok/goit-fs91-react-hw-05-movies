import { getTrendingMovies } from '../../services/fetchMovies';
import { useEffect, useState } from 'react';
import { showError } from '../../utils/ToastNotification';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchTrendingMovies = () => {
      getTrendingMovies()
        .then(({ results }) => {
          setTrendingMovies(results);
        })
        .catch(error => showError(error.message));
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map(({ id, title, release_date, poster_path }) => (
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

export default Home;
