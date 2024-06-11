import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Plan = lazy(() => import('./components/Plan'));

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Plan />} />
    </Routes>
  );
};

export default Router;
