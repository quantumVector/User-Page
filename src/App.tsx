import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import { Login, NotFound, SignUp, UserPage } from './pages';

function App() {
  return (
    <div className='app-wrapper'>
      <Routes>
        <Route path='/' element={<UserPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
