import React, { FC, useState } from 'react';
import { Alert, Button, TextField, Box } from '@mui/material';
import { updatePassword } from "firebase/auth";
import { useAuth } from '../hooks/useAuth';

const PasswordBlock: FC = () => {
  const { auth } = useAuth();
  const [passwordEditMod, setPasswordEditMode] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const onUpdatePassword = () => {
    if (auth.currentUser) {
      updatePassword(auth.currentUser, passwordValue).then(() => {
        setSuccess('Password change was successful!');
        setError('');
      }).catch((error) => {
        error.code === 'auth/requires-recent-login'
          ? setError('You need to log into your account AGAIN to change your password.')
          : setError(error.message);
      });
    }
  }

  const saveNewPassword = () => {
    if (passwordValue && passwordValue.length >= 8) {
      onUpdatePassword();
    } else {
      setError('Password must be at least 8 characters.');
    }

    setPasswordEditMode(false);
    setPasswordValue('');
  }

  return (
    <>
      {error && (
        <Alert severity='error' style={{ margin: '20px 0', maxWidth: '300px' }}>
          {error}
        </Alert>
      )}
      {success && (
        <Alert severity='success' style={{ margin: '20px 0', maxWidth: '300px' }}>
          {success}
        </Alert>
      )}
      {!passwordEditMod &&
        <Box display='flex' justifyContent='space-between' alignItems='center'
          sx={{ width: '100%', height: 50, marginBottom: 2 }}>
          <TextField
            disabled
            type='password'
            defaultValue='111111111111111111111111111'
            variant="standard"
            sx={{ width: '176px' }}
          />
          <Button onClick={() => {
            setPasswordEditMode(true);
            setError('');
            setSuccess('');
          }} size="small"
            variant="contained"
            sx={{ marginLeft: 2 }}>Change password</Button>
        </Box>}

      {passwordEditMod &&
        <Box display='flex' justifyContent='space-between' alignItems='center'
          sx={{ width: '100%', height: 50, marginBottom: 2 }}>
          <TextField label="Enter new password"
            type="password"
            variant="standard"
            onChange={(e) => setPasswordValue(e.target.value)}
          />
          <Button onClick={saveNewPassword} size="small"
            variant="contained"
            sx={{ marginLeft: 2 }}>Save</Button>
          <Button onClick={() => setPasswordEditMode(false)}
            size="small" variant="contained" sx={{ marginLeft: 1 }}>Canсel</Button>
        </Box>}
    </>
  )
}

export default PasswordBlock;
