import './App.scss';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { NotFoundPage } from './pages/PageNotFound/NotFoundPage';
import { PeoplePage } from './pages/PeoplePage/PeoplePage';
import { MainLayout } from './layout/MainLayout';
import { useEffect, useState } from 'react';
import { Person } from './types';
import { getPeople } from './api/people';

export const App = () => {
  const [people, setPeople] = useState<Array<Person> | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== '/people') {
      return;
    }

    const fetchPeople = async () => {
      const data = await getPeople();

      setPeople(data);
    };

    fetchPeople();
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/people" element={<PeoplePage people={people} />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
