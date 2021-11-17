import React, { FC } from 'react';
import classes from './UserPage.module.css'
import { Avatar } from '@mui/material';
import defaultAvatar from '../../../assets/avatar-default-icon.png';
import { useAuth } from '../../providers/useAuth';

const UserPage: FC = () => {
  const { user } = useAuth();

  return (
    <div className={classes.wrap}>
      <Avatar src={user?.avatar || defaultAvatar} sx={{ width: 300, height: 300 }}></Avatar>
      <div className={classes.infoBox}>
        <div className={classes.items}>
          <div className={classes.item}>Full Name</div>
          <div className={classes.item}>Email</div>
          <div className={classes.item}>Status</div>
          <div className={classes.item}>Info</div>
        </div>
        <div className={classes.items}>
          <div className={classes.item}>{user?._id}</div>
          <div className={classes.item}>{user?.email}</div>
          <div className={classes.item}>Crash and test</div>
          <div className={classes.item}>Super tester in the world!</div>
        </div>
      </div>
    </div>
  )
}

export default UserPage;
