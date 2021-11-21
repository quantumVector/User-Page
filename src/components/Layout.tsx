import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import { Grid } from '@mui/material';

const Layout = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      {/* <div className='container'> */}
      <Grid display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        <Outlet />
      </Grid>
      {/* </div> */}
      <Footer />
    </div>
  )
}

export default Layout;
