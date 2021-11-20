import React, { FC, useEffect, useState } from 'react';
import { Alert, Button, TextField } from '@mui/material';
import { updateEmail } from "firebase/auth";
import classes from '../styles/EmailBlock.module.css';
import { useAuth } from '../hooks/useAuth';

const EmailBlock: FC = () => {
  const { auth, user } = useAuth();
  const [emailEditMod, setEmailEditMode] = useState(false);
  const [emailValue, setEmailValue] = useState('');
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
        switch (error.code) {
          case 'auth/requires-recent-login':
            setError('You need to log into your account AGAIN to change your mail.');
            break;
          case 'auth/invalid-email':
            setError('Please enter a valid email.');
            break;
          default:
            setError(error.message);
        }
        setSuccess('');
        if (user?.email) setEmailValue(user.email);
      });
    }
  }

  const saveNewEmail = () => {
    if (emailValue) {
      onUpdateEmail();
    } else {
      setError('Empty string is invalid.');
      setSuccess('');
      if (user?.email) setEmailValue(user?.email);
    }

    setEmailEditMode(false);
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
      {!emailEditMod &&
        <div className={classes.email}>
          <div>{emailValue}</div>
          <Button onClick={() => {
            setEmailEditMode(true);
            setEmailValue('');
            setError('');
          }} size="small"
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
          <Button onClick={() => {
            setEmailEditMode(false);
            if (user?.email) setEmailValue(user?.email);
            setError('');
          }}
            size="small" variant="contained" sx={{ marginLeft: 2 }}>Canсel</Button>
        </div>}
    </>
  )
}

export default EmailBlock;
