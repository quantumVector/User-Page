import React, { FC } from 'react';
import classes from './UserPage.module.css'
import EmailBlock from './EmailBlock';
import PasswordBlock from './PasswordBlock';
import AvatarBlock from './AvatarBlock';

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
