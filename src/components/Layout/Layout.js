import 'styled-components';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../Loader';
import { NavbarHeader } from '../Navbar';

import { Container, Header } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <NavbarHeader />
        </Container>
      </Header>
      <main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default Layout;
