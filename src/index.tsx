import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as firebase from 'firebase/app';
import AppRoutes from './components/routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './components/providers/AuthProvider';

firebase.initializeApp({
  apiKey: "AIzaSyDCpry19k3lALtiix4kQ3I4zzijM3LW14o",
  authDomain: "user-page-3cfeb.firebaseapp.com",
  projectId: "user-page-3cfeb",
  storageBucket: "user-page-3cfeb.appspot.com",
  messagingSenderId: "74694622364",
  appId: "1:74694622364:web:6651db478f9b970af14159",
  measurementId: "G-7WN52ZJP4C"
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
