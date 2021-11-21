import React, { FC } from 'react';
import { Box } from '@mui/material';
import AvatarBlock from '../components/AvatarBlock';
import EmailBlock from '../components/EmailBlock';
import PasswordBlock from '../components/PasswordBlock';

const UserPage: FC = () => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <AvatarBlock />
      <EmailBlock />
      <PasswordBlock />
    </Box>
  )
}

export default UserPage;
