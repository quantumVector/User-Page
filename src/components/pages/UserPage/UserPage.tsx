import React, { FC, useEffect, useState } from 'react';
import classes from './UserPage.module.css'
import { Alert, Avatar, Button, TextField } from '@mui/material';
import defaultAvatar from '../../../assets/avatar-default-icon.png';
import { useAuth } from '../../providers/useAuth';
import { updateEmail, updatePassword } from "firebase/auth";

const UserPage: FC = () => {
  const { auth, user } = useAuth();
  const [emailEditMod, setEmailEditMode] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [passwordEditMod, setPasswordEditMode] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (user?.email) setEmailValue(user.email);
  }, [user]);

  const onUpdateEmail = () => {
    if (auth.currentUser) {
      updateEmail(auth.currentUser, emailValue).then(() => {
        setSuccess('Email change was successful!');
        setError('');
      }).catch((error) => {
        let customError: string = '';

        if (error.code === 'auth/requires-recent-login')
          customError = 'You need to log into your account AGAIN to change your mail.';
        if (error.code === 'auth/invalid-email')
          customError = 'Please enter a valid email.';

        setError(customError || error.message);
        setSuccess('');

        if (user?.email) setEmailValue(user.email);
      });
    }
  }

  const saveNewEmail = () => {
    onUpdateEmail();
    setEmailEditMode(false);
  }

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
    <div className={classes.wrap}>
      <Avatar src={defaultAvatar} sx={{ width: 300, height: 300 }}></Avatar>
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
      <div className={classes.items}>

        {!emailEditMod &&
          <div className={classes.email}>
            <div>{emailValue}</div>
            <Button onClick={() => setEmailEditMode(true)} size="small"
              variant="contained" sx={{ marginLeft: 2 }}>Change email</Button>
          </div>}

        {emailEditMod &&
          <div className={classes.email}>
            <TextField label="Enter new email"
              variant="standard"
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <Button onClick={saveNewEmail} size="small"
              variant="contained" sx={{ marginLeft: 2 }}>Save</Button>
            <Button onClick={() => setEmailEditMode(false)}
              size="small" variant="contained" sx={{ marginLeft: 2 }}>Canсel</Button>
          </div>}

        {!passwordEditMod &&
          <Button onClick={() => setPasswordEditMode(true)} size="small"
            variant="contained">Change password</Button>}

        {passwordEditMod &&
          <div className={classes.item}>
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

      </div>
    </div>
  )
}

export default UserPage;
