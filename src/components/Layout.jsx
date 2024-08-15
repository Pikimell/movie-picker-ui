import { Suspense } from 'react';
import Navigation from './Navigation/Navigation';

export const Layout = ({ children }) => {
  return (
    <div className="main-container">
      <Suspense fallback={null}>{children}</Suspense>
      <Navigation />
    </div>
  );
};
