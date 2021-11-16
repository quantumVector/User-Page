import React, { FC, SyntheticEvent, useState } from 'react';
import { Alert, Button, Grid, TextField, Box } from '@mui/material';

export interface IUserData {
  fullName: string,
  email: string,
  password: string,
  confirmPassword: string,
};


const Signup: FC = () => {
  const [userData, setUserData] = useState<IUserData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  } as IUserData);

  const handleLogin = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(userData.fullName)
    console.log(userData.email)
    console.log(userData.password)
    console.log(userData.confirmPassword)
  };

  return (
    <>
      <h1>Sign up</h1>
      {false && (
        <Alert severity='error' style={{ marginTop: 20 }}>
          {'error'}
        </Alert>
      )}
      <Grid display='flex' justifyContent='center' alignItems='center' height=''>
        <form onSubmit={handleLogin}>
          <TextField
            label='Full name'
            variant='outlined'
            fullWidth
            sx={{ display: 'block', marginTop: 3, marginBottom: 3, width: 400 }}
            onChange={e => setUserData({ ...userData, fullName: e.target.value })}
            required
          />
          <TextField
            type='email'
            label='Email'
            variant='outlined'
            fullWidth
            sx={{ display: 'block', marginTop: 3, marginBottom: 3, width: 400 }}
            onChange={e => setUserData({ ...userData, email: e.target.value })}
            required
          />
          <TextField
            type='password'
            label='Password'
            variant='outlined'
            fullWidth
            sx={{ display: 'block', marginBottom: 3, width: 400 }}
            onChange={e => setUserData({ ...userData, password: e.target.value })}
            required
          />
          <TextField
            type='password'
            label='Confirm password'
            variant='outlined'
            fullWidth
            sx={{ display: 'block', marginBottom: 3, width: 400 }}
            onChange={e => setUserData({ ...userData, confirmPassword: e.target.value })}
            required
          />
          <Box textAlign='center'>
            <Button
              type='submit'
              variant='outlined'
              size="large"
            >
              Sign up
            </Button>
          </Box>
        </form>
      </Grid>
    </>
  )
}

export default Signup;