import { NavLink, Outlet } from 'react-router-dom';

import { Suspense } from 'react';
import Loader from '../Loader';

const Layout = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>

        <ul>
          <li>Укр</li>
          <li>Англ</li>
        </ul>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
