/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from 'react';
import { Grid, Alert, Box } from '@mui/material';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { EmailField, PasswordField, SubmitButton } from '../formContoller/FormController';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormSchema } from '../../utils/validators';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from '../providers/useAuth';
import { useNavigate, Link } from 'react-router-dom';
export interface IFormInputs {
  email: string,
  password: string,
};

const Login: FC = () => {
  const { auth, user } = useAuth();
  const methods = useForm<IFormInputs>({
    resolver: yupResolver(loginFormSchema),
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate(`/user/${user.id}`);
  }, [user]);

  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate(`/user/${user.uid}`);
      })
      .catch((error) => {
        let customError: string = '';

        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password')
          customError = 'The email or password is incorrect.';

        setError(customError || error.message);
      });
  }

  return (
    <>
      {error && (
        <Alert severity='error' style={{ margin: 20 }}>
          {error}
        </Alert>
      )}
      <h1>Login</h1>
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
