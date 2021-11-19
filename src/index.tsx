import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoutes from './components/routes/Routes';
import { HashRouter } from 'react-router-dom';
import { AuthProvider } from './components/providers/AuthProvider';
import './firebase';

// HashRouter instead of BrowserRouter to work on github pages
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
