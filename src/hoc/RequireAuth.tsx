import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const RequireAuth: React.ComponentType<any> = ({ children, redirectTo }) => {
  const { user } = useAuth();

  return user ? children : <Navigate to={redirectTo} />;
}

export default RequireAuth;
