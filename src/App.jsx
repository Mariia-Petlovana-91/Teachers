import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Layout from '../src/components/common/Layout';
import Loader from './components/common/Loader';
import Toast from './components/common/Toast';
import Popup from './components/Popup/Popup';
import PrivateRout from './components/PrivateRout';

// import Home from '../src/pages/Home';
// import Teachers from '../src/pages/Teachers';
// import Favorites from '../src/pages/Favorites';
// import NotFound from '../src/pages/NotFound';

const Home = lazy(() => import('../src/pages/Home'));
const Teachers = lazy(() => import('../src/pages/Teachers'));
const Favorites = lazy(() => import('../src/pages/Favorites'));
const NotFound = lazy(() => import('../src/pages/NotFound'));

export default function App() {
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
