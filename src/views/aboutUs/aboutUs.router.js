import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const AboutUs = lazy(() => import('./components/AboutUs'));

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<AboutUs />} />
    </Routes>
  );
};

export default Router;
