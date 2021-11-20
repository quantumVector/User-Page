/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useState } from 'react';
import { Grid, Alert, Box } from '@mui/material';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { ConfirmPasswordField, EmailField, PasswordField, SubmitButton } from '../components/FormController';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupFormSchema } from '../utils/validators';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export interface IFormInputs {
  fullName: string,
  email: string,
  password: string,
  confirmPassword: string,
};

const Signup: FC = () => {
  const { user, signup } = useAuth();
  const methods = useForm<IFormInputs>({
    resolver: yupResolver(signupFormSchema),
  });
  const [error, setError] = useState('');

  const formSubmitHandler: SubmitHandler<IFormInputs> = async (data: IFormInputs) => {
    signup(data.email, data.password)
      .then((message: string) => {
        if (message !== 'success') setError(message);
      });
  }

  return (
    <>
      {user && <Navigate to={`/user/${user.id}`} />}
      <h1>Sign up</h1>
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
            <ConfirmPasswordField />
            <SubmitButton text='Sign up' />
            <Box sx={{ textAlign: 'center', marginTop: 2 }}>
              <div>Already have an account?  <Link to="/">Log in</Link></div>
            </Box>
          </form>
        </FormProvider >
      </Grid>
    </>
  )
}

export default Signup;