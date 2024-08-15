import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const ActivePage = lazy(() => import('../../pages/ActivePage/ActivePage.jsx'));
const SearchPage = lazy(() => import('../../pages/SearchPage/SearchPage.jsx'));
const SeriesPage = lazy(() => import('../../pages/SeriesPage/SeriesPage.jsx'));
const UserPage = lazy(() => import('../../pages/UserPage/UserPage.jsx'));

const App = ({}) => {
  return (
    <Layout>
      <Routes>
        <Route path="/active" element={<ActivePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
};

export default App;
