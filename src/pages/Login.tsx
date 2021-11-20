/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useState } from 'react';
import { Grid, Alert, Box } from '@mui/material';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { EmailField, PasswordField, SubmitButton } from '../components/FormController';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormSchema } from '../utils/validators';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export interface IFormInputs {
  email: string,
  password: string,
};

const Login: FC = () => {
  const { user, login } = useAuth();
  const methods = useForm<IFormInputs>({
    resolver: yupResolver(loginFormSchema),
  });
  const [error, setError] = useState('');

  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    login(data.email, data.password)
      .then((message: string) => {
        if (message !== 'success') setError(message);
      });
  }

  return (
    <>
      {user && <Navigate to={`/user/${user.id}`} />}
      <h1>Login</h1>
      {error && (
        <Alert severity='error' style={{ margin: 20 }}>
          {error}
        </Alert>
      )}
      <Grid display='flex' justifyContent='center' alignItems='center'>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
            <EmailField />
            <PasswordField />
            <SubmitButton text='Login' />
            <Box sx={{ textAlign: 'center', marginTop: 2 }}>
              <div>Don't have an account? <Link to="/signup">Sign up</Link></div>
            </Box>
          </form>
        </FormProvider >
      </Grid>
    </>
  )
}

export default Login;
