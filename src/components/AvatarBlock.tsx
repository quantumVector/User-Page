import React, { FC } from 'react';
import { Avatar } from '@mui/material';
import defaultAvatar from '../assets/avatar-default-icon.png';

const AvatarBlock: FC = () => {
  return (
    <Avatar src={defaultAvatar} sx={{ width: 250, height: 250 }}></Avatar>
  )
}

export default AvatarBlock;
