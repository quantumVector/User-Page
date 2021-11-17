import React, { FC, useState } from 'react';
import { Grid, Alert } from '@mui/material';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { ConfirmPasswordField, EmailField,/*  FullNameField, */ PasswordField, SubmitButton } from '../formContoller/FormController';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupFormSchema } from '../../utils/validators';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from '../providers/useAuth';
import { useNavigate } from 'react-router-dom';

export interface IFormInputs {
  fullName: string,
  email: string,
  password: string,
  confirmPassword: string,
};

const Signup: FC = () => {
  const { auth } = useAuth();
  const methods = useForm<IFormInputs>({
    resolver: yupResolver(signupFormSchema),
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const formSubmitHandler: SubmitHandler<IFormInputs> = async (data: IFormInputs) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
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
      <Grid display='flex' justifyContent='center' alignItems='center' height=''>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
            <EmailField />
            <PasswordField />
            <ConfirmPasswordField />
            <SubmitButton text='Sign up' />
          </form>
        </FormProvider >
      </Grid>
    </>
  )
}

export default Signup;