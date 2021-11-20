import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import RequireAuth from './hoc/RequireAuth';
import { Login, NotFound, Signup, UserPage } from './pages';

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/user/:id" element={
            <RequireAuth redirectTo="/">
              <UserPage />
            </RequireAuth>
          } />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
