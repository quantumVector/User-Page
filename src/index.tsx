import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoutes from './components/routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './components/providers/AuthProvider';
import './firebase';

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
