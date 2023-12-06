import React from 'react';

import { NavList, StyledNavLink } from './Navbar.styled';

export const NavbarInfo = () => {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="cast" $linksize="18px" $linkcolor="#24243e">
            Cast
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="reviews" $linksize="18px" $linkcolor="#24243e">
            Reviews
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
};
export default NavbarInfo;
