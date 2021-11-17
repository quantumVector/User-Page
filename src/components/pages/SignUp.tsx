import React, { FC } from 'react';
import { Grid } from '@mui/material';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { ConfirmPasswordField, EmailField, FullNameField, PasswordField, SubmitButton } from '../formContoller/FormController';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupFormSchema } from '../../utils/validators';

export interface IFormInputs {
  fullName: string,
  email: string,
  password: string,
  confirmPassword: string,
};

const Signup: FC = () => {
  const methods = useForm<IFormInputs>({
    resolver: yupResolver(signupFormSchema),
  });

  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    console.log('form data is: ', data);
  }

  return (
    <>
      <h1>Sign up</h1>
      <Grid display='flex' justifyContent='center' alignItems='center' height=''>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
            <FullNameField />
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