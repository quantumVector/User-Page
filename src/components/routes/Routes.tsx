import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import { routes } from './list';

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {routes.map(route => <Route
          path={route.path}
          element={<route.element />}
          key={`route ${route.path}`}
        />)}
      </Route>
    </Routes>
  )
}

export default AppRoutes;
