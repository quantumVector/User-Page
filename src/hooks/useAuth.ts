import { useContext } from 'react';
import { AuthContext } from '../hoc/AuthProvider';

export const useAuth = () => {
  const value = useContext(AuthContext);

  return value;
};
