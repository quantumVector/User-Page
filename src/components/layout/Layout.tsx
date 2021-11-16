import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout: FC = () => {
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
