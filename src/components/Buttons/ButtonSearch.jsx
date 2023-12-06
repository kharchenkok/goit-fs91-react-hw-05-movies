import React from 'react';

import { FaSearch } from 'react-icons/fa';
import { ButtonSearchStyled } from './Buttons.styled';

const ButtonSearch = ({ backLink }) => {
  return (
    <ButtonSearchStyled to={backLink}>
      <FaSearch />
      Search
    </ButtonSearchStyled>
  );
};
export default ButtonSearch;
