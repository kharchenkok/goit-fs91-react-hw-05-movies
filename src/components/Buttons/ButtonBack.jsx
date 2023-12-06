import React from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { BackLink } from './Buttons.styled';

const ButtonBack = ({ backLink }) => {
  return (
    <BackLink to={backLink}>
      <FaLongArrowAltLeft />
      Back
    </BackLink>
  );
};
export default ButtonBack;
