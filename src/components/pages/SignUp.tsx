/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from 'react';
import { Grid, Alert, Box } from '@mui/material';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { ConfirmPasswordField, EmailField, PasswordField, SubmitButton } from '../formContoller/FormController';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupFormSchema } from '../../utils/validators';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from '../providers/useAuth';
import { Link, useNavigate } from 'react-router-dom';

export interface IFormInputs {
  fullName: string,
  email: string,
  password: string,
  confirmPassword: string,
};

const Signup: FC = () => {
  const { auth, user } = useAuth();
  const methods = useForm<IFormInputs>({
    resolver: yupResolver(signupFormSchema),
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate(`/user/${user.id}`);
  }, [user]);

  const formSubmitHandler: SubmitHandler<IFormInputs> = async (data: IFormInputs) => {
    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate(`/user/${user.uid}`);
      })
      .catch((error) => {
        let customError: string = '';

        if (error.code === 'auth/email-already-in-use')
          customError = 'This email address has already been registered.';

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
      <h1>Sign up</h1>
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