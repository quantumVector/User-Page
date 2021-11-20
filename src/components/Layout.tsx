import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <div className='container'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout;
