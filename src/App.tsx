import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import RequireAuth from './hoc/RequireAuth';
import { Login, NotFound, Signup, UserPage } from './pages';

const App: FC = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/user/:id" element={
            <RequireAuth redirectTo="/">
              <UserPage />
            </RequireAuth>
          } />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;
