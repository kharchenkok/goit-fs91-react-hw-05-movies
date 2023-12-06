import React from 'react';

import { NavList, StyledNavLink } from './Navbar.styled';

export const NavbarHeader = () => {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
};
export default NavbarHeader;
