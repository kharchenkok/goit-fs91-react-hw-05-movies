import { getTrendingMovies } from '../../services/fetchMovies';
import { useEffect, useState } from 'react';
import { showError } from '../../utils/ToastNotification';
import { useLocation } from 'react-router-dom';

import MoviesList from '../../components/MoviesList';
import { Section, SectionTitle } from '../../components/Layout/Layout.styled';

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
    <Section>
      <SectionTitle>Trending today :</SectionTitle>
      <MoviesList movies={trendingMovies} location={location} />
    </Section>
  );
};

export default Home;
