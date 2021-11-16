import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const setActive = ({ isActive }: IsActive) => isActive
  ? classes.active
  : '';

const Header: FC = () => {
  return (
    <header className={classes.wrap}>
      <div className={classes.logo}>User Page Project</div>
      <div className={classes.links}>
        <NavLink to='/' className={setActive}>Login</NavLink>
        <NavLink to='signup' className={setActive}>Sign up</NavLink>
      </div>
    </header>
  )
}

type IsActive = { isActive: boolean };

export default Header;
