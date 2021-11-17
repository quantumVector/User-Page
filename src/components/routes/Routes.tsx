import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import { Login } from '../pages';
import { useAuth } from '../providers/useAuth';
import { routes } from './list';

const AppRoutes: FC = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {routes.map(route => {
          return (
            <Route
              path={route.path}
              element={route.auth && !user ? <Login /> : <route.element />}
              key={`route ${route.path}`}
            />
          )
        })}
      </Route>
    </Routes>
  )
}

export default AppRoutes;
