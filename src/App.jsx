import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';

import Layout from '../src/components/common/Layout';
import Loader from './components/common/Loader';
import Toast from './components/common/Toast';
import Popup from './components/Popup/Popup';
import PrivateRout from './components/PrivateRout';

const Home = lazy(() => import('../src/pages/Home'));
const Teachers = lazy(() => import('../src/pages/Teachers'));
const Favorites = lazy(() => import('../src/pages/Favorites'));
const NotFound = lazy(() => import('../src/pages/NotFound'));

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname !== window.location.pathname) {
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="teachers" element={<Teachers />} />
            <Route element={<PrivateRout />}>
              <Route path="favorite" element={<Favorites />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <Popup />
      <Toast />
    </>
  );
}
