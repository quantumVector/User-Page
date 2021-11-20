import React, { FC, useState } from 'react';
import { Alert, Button, TextField } from '@mui/material';
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
        <Alert severity='error' style={{ margin: 20 }}>
          {error}
        </Alert>
      )}
      {success && (
        <Alert severity='success' style={{ margin: 20 }}>
          {success}
        </Alert>
      )}
      {!passwordEditMod &&
        <Button onClick={() => {
          setPasswordEditMode(true);
          setError('');
          setSuccess('');
        }} size="small"
          variant="contained">Change password</Button>}

      {passwordEditMod &&
        <div>
          <TextField label="Enter new password"
            type="password"
            variant="standard"
            onChange={(e) => setPasswordValue(e.target.value)}
          />
          <Button onClick={saveNewPassword} size="small"
            variant="contained">Save</Button>
          <Button onClick={() => setPasswordEditMode(false)}
            size="small" variant="contained" sx={{ marginLeft: 2 }}>Canсel</Button>
        </div>}
    </>
  )
}

export default PasswordBlock;
