/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, FC, useState, Dispatch, SetStateAction, useEffect, useMemo } from 'react';
import { Auth, getAuth, onAuthStateChanged } from '@firebase/auth';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

interface IUser {
  id: string,
  name: string | null,
  email: string | null,
}

interface IContext {
  user: IUser | null,
  setUser: TypeSetState<IUser | null>,
  auth: Auth,
  login: (email: string, password: string) => Promise<any>,
  signup: (email: string, password: string) => Promise<any>,
  signout: () => void,
}

type TypeSetState<T> = Dispatch<SetStateAction<T>>;

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const auth = getAuth();
  const navigate = useNavigate();

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

  const login = (email: string, password: string) => {
    const promise = new Promise((resolve, reject) => {
      let message: string = '';

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          message = 'success';
          navigate(`/user/${user.uid}`);
          resolve(message);
        })
        .catch((error) => {
          if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password')
            message = 'The email or password is incorrect.';
          resolve(message);
        })
    })

    return promise;
  }

  const signup = (email: string, password: string) => {
    const promise = new Promise((resolve, reject) => {
      let message: string = '';

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate(`/user/${user.uid}`);
          resolve(message);
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use')
            message = 'This email address has already been registered.';
          resolve(message);
        });
    })

    return promise;
  }

  const signout = () => {
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      console.log('faild', error)
    });
  }

  const values = useMemo(() => ({
    user,
    setUser,
    auth,
    login,
    signup,
    signout,
  }), [user]);

  return <AuthContext.Provider value={values}>
    {children}
  </AuthContext.Provider>
};
