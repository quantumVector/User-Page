import React, { FC } from 'react';
import { Alert, Button, Grid, TextField, Box } from '@mui/material';

const Signup: FC = () => {
  return (
    <>
      <h1>Sign up</h1>
      {false && (
        <Alert severity='error' style={{ marginTop: 20 }}>
          {'error'}
        </Alert>
      )}
      <Grid display='flex' justifyContent='center' alignItems='center' height=''>
        <form>
          <TextField
            label='Full name'
            variant='outlined'
            fullWidth
            sx={{ display: 'block', marginTop: 3, marginBottom: 3, width: 400 }}
            required
          />
          <TextField
            type='email'
            label='Email'
            variant='outlined'
            fullWidth
            sx={{ display: 'block', marginTop: 3, marginBottom: 3, width: 400 }}
            required
          />
          <TextField
            type='password'
            label='Password'
            variant='outlined'
            fullWidth
            sx={{ display: 'block', marginBottom: 3, width: 400 }}
            required
          />
          <TextField
            type='password'
            label='Confirm password'
            variant='outlined'
            fullWidth
            sx={{ display: 'block', marginBottom: 3, width: 400 }}
            required
          />
          <Box textAlign='center'>
            <Button
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