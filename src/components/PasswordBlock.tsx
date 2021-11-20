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
    let customError: string = '';

    if (passwordValue.length < 8) {
      customError = 'Password must be at least 8 characters.';
      setError(customError);
    }

    if (auth.currentUser) {
      updatePassword(auth.currentUser, passwordValue).then(() => {
        setSuccess('Password change was successful!');
        setError('');
      }).catch((error) => {
        if (error.code === 'auth/requires-recent-login')
          customError = 'You need to log into your account AGAIN to change your password.';

        setError(customError || error.message);
        setSuccess('');
      });
    }
  }

  const saveNewPassword = () => {
    onUpdatePassword();
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
        <Button onClick={() => setPasswordEditMode(true)} size="small"
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
