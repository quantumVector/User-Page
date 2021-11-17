/* eslint-disable react-hooks/exhaustive-deps */
import { Auth, getAuth, onAuthStateChanged } from '@firebase/auth';
import React, { createContext, FC, useState, Dispatch, SetStateAction, useEffect, useMemo } from 'react';

interface IUser {
  id: string,
  name: string | null,
  email: string | null,
}

interface IContext {
  user: IUser | null,
  setUser: TypeSetState<IUser | null>,
  auth: Auth,
}

type TypeSetState<T> = Dispatch<SetStateAction<T>>;

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const auth = getAuth();

  useEffect(() => {
    const unListen = onAuthStateChanged(auth, authUser => {
      setUser(authUser ? {
        id: authUser.uid,
        name: '',
        email: authUser.email,
      } : null)
    })

    return () => unListen();
  }, []);

  const values = useMemo(() => ({
    user,
    setUser,
    auth
  }), [user]);

  return <AuthContext.Provider value={values}>
    {children}
  </AuthContext.Provider>
};
