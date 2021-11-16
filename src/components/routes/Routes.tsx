import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './list';

const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(route => <Route
          path={route.path}
          element={<route.element />}
          key={`route ${route.path}`}
        />)}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
