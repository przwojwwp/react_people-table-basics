import './App.scss';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './components/Home/Home';
import cn from 'classnames';
import { NotFoundPage } from './components/PageNotFound/NotFoundPage';
import { PeoplePage } from './components/PeoplePage/PeoplePage';
// import { useEffect } from 'react';

export const App = () => {
  const { pathname } = useLocation();

  // useEffect(() => {
  //   const fetchedPeople = async () => {
  //     const response = await fetch(
  //       'https://mate-academy.github.io/react_people-table/api/people.json',
  //     );

  //     const data = await response.json();

  //     console.log(data);
  //   };

  //   fetchedPeople();
  // }, []);

  return (
    <div data-cy="app">
      <nav
        data-cy="nav"
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              className={cn('navbar-item', {
                'navbar-item has-background-grey-lighter': pathname === '/',
              })}
              to="/"
            >
              Home
            </Link>

            <Link
              className={cn('navbar-item', {
                'navbar-item has-background-grey-lighter':
                  pathname.startsWith('/people'),
              })}
              to="/people"
            >
              People
            </Link>
          </div>
        </div>
      </nav>

      <main className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};
