import React, { useState, useEffect } from 'react';
import { SearchForm, SearchInput } from './Searchbar.styled';
import ButtonSearch from '../Buttons/ButtonSearch';

const Searchbar = ({ onFormSubmit, defaultSearchValue }) => {
  const [userInput, setUserInput] = useState(defaultSearchValue || '');

  useEffect(() => {
    setUserInput(defaultSearchValue || '');
  }, [defaultSearchValue]);

  const updateSearchString = event => {
    const { value } = event.target;
    setUserInput(value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    onFormSubmit(userInput.trim());
  };

  return (
    <SearchForm onSubmit={handleFormSubmit}>
      <SearchInput
        type={'text'}
        value={userInput}
        name="query"
        onChange={updateSearchString}
        placeholder="Search movies..."
      />
      <ButtonSearch type="submit">Search</ButtonSearch>
    </SearchForm>
  );
};

export default Searchbar;
