import React, { FC } from 'react';
import AvatarBlock from '../components/AvatarBlock';
import EmailBlock from '../components/EmailBlock';
import PasswordBlock from '../components/PasswordBlock';
import classes from '../styles/UserPage.module.css';

const UserPage: FC = () => {
  return (
    <div className={classes.wrap}>
      <div className={classes.items}>
        <AvatarBlock />
        <EmailBlock />
        <PasswordBlock />
      </div>
    </div>
  )
}

export default UserPage;
