import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  gap: 30px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.$linkcolor || 'white'};
  font-weight: 700;
  font-size: ${props => props.$linksize || '24px'};

  &.active {
    color: ${props => props.$activecolor || '#f65261'};
    border-bottom: 1px solid currentColor;
  }
`;
