import React from 'react';
import { Avatar } from '@mui/material';
import defaultAvatar from '../../../assets/avatar-default-icon.png';

const AvatarBlock = () => {
  return (
    <Avatar src={defaultAvatar} sx={{ width: 300, height: 300 }}></Avatar>
  )
}

export default AvatarBlock;
