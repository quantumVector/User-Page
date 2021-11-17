import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import { useAuth } from '../../providers/useAuth';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Header: FC = () => {
  const { auth, user } = useAuth();
  const navigate = useNavigate();

  const onLogOut = () => {
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      console.log('faild', error)
    });
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
