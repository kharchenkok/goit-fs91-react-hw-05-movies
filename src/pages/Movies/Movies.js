import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getSearchMovies } from '../../services/fetchMovies';
import { showError } from '../../utils/ToastNotification';
import Searchbar from '../../components/Searchbar';
import MoviesList from '../../components/MoviesList';
import { Section } from '../../components/Layout/Layout.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const userSearch = searchParams.get('search') || '';

  const fetchSearchMovies = useCallback(query => {
    getSearchMovies(query)
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(error => showError(error.message));
  }, []);

  useEffect(() => {
    if (userSearch === '') return setMovies([]);

    fetchSearchMovies(userSearch);
  }, [fetchSearchMovies, userSearch]);

  const handleFormSubmit = userInput => {
    const query = userInput.trim();
    if (query === '') {
      setSearchParams({});
    } else {
      setSearchParams({ search: query });
      fetchSearchMovies(query);
    }
  };

  return (
    <Section>
      <Searchbar
        onFormSubmit={handleFormSubmit}
        defaultSearchValue={userSearch}
      />

      {movies && movies.length > 0 && (
        <MoviesList movies={movies} location={location} />
      )}
    </Section>
  );
};

export default Movies;
