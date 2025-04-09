import 'normalize.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Header } from './components/layout/Header/Header';
import { ErrorBlock } from './components/elements/ErrorBlock/ErrorBlock';

const Home = lazy(() => import('./pages/Home/Home'));
const Profile = lazy(() => import('./pages/Profile/Profile'));

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Suspense fallback={<ErrorBlock page="Loading" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:id" element={<Profile />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
