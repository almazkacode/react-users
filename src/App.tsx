import 'normalize.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Header } from './components/layout/Header/Header';
import { Spinner } from './components/elements/Spinner/Spinner';

// lazy loading позволяет загружать страницы только тогда, когда они нужны, что сокращает время начальной загрузки приложения.
const Home = lazy(() => import('./pages/Home/Home'));
const Profile = lazy(() => import('./pages/Profile/Profile'));

export const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        {/* Suspense используется для того, чтобы показать компонент fallback (Spinner) 
            до того, как компоненты, загружаемые через lazy, будут загружены */}
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:id" element={<Profile />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};
