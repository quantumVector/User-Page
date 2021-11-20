import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../styles/Header.module.css';
import { Button } from '@mui/material';
import { useAuth } from '../hooks/useAuth';

const Header: FC = () => {
  const { user, signout } = useAuth();

  const onLogOut = () => {
    signout();
  }

  return (
    <header className={classes.wrap}>
      <div className={classes.logo}>User Page Project</div>
      <div className={classes.links}>
        {user
          ? <Button onClick={onLogOut} size="large" variant="contained">Log out</Button>
          : <>
            <Button component={NavLink} to="/" size="large" variant="contained" sx={{ marginRight: 3 }}>Login</Button>
            <Button component={NavLink} to="/signup" size="large" variant="contained">Sign up</Button>
          </>
        }
      </div>
    </header>
  )
}

export default Header;
