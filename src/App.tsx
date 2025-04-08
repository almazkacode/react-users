import 'normalize.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/layout/Header/Header';
import { Home } from './pages/Home/Home';
import { Profile } from './pages/Profile/Profile';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
