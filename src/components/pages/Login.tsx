import React, { FC } from 'react';
import { Grid } from '@mui/material';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { EmailField, PasswordField, SubmitButton } from '../formContoller/FormController';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormSchema } from '../../utils/validators';
export interface IFormInputs {
  email: string,
  password: string,
};

const Login: FC = () => {
  const methods = useForm<IFormInputs>({
    resolver: yupResolver(loginFormSchema),
  });

  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    console.log('form data is: ', data);
  }

  return (
    <>
      <h1>Login</h1>
      <Grid display='flex' justifyContent='center' alignItems='center' height=''>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
            <EmailField />
            <PasswordField />
            <SubmitButton text='Login' />
          </form>
        </FormProvider >
      </Grid>
    </>
  )
}

export default Login;
