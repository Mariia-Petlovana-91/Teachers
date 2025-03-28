import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Layout from '../src/components/common/Layout';
import Loader from './components/common/Loader';
import Toast from './components/common/Toast';

const Home = lazy(() => import('../src/pages/Home'));
const Teachers = lazy(() => import('../src/pages/Teachers'));
const Favorite = lazy(() => import('../src/pages/Favorites'));
const NotFound = lazy(() => import('../src/pages/NotFound'));

export default function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="catalog" element={<Teachers />} />
            <Route path="catalog/:id" element={<Favorite />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <Toast />
    </>
  );
}
