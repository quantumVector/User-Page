import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';

export const EmailField: FC = () => {
  const { control, formState: { errors } } = useFormContext();

  return <Controller name='email' control={control} defaultValue=''
    render={({ field }) => (
      <TextField
        {...field}
        label='Email'
        variant='outlined'
        fullWidth
        sx={{ display: 'block', marginTop: 3, marginBottom: 3, width: 350 }}
        error={!!errors.email}
        helperText={errors.email ? errors.email?.message : ''}
      />
    )}
  />
}

export const PasswordField: FC = () => {
  const { control, formState: { errors } } = useFormContext();

  return <Controller name='password' control={control} defaultValue=''
    render={({ field }) => (
      <TextField
        {...field}
        type='password'
        label='Password'
        variant='outlined'
        fullWidth
        sx={{ display: 'block', marginTop: 3, marginBottom: 3, width: 350 }}
        error={!!errors.password}
        helperText={errors.password ? errors.password?.message : ''}
      />
    )}
  />
}

export const ConfirmPasswordField: FC = () => {
  const { control, formState: { errors } } = useFormContext();

  return <Controller name='confirmPassword' control={control} defaultValue=''
    render={({ field }) => (
      <TextField
        {...field}
        type='password'
        label='Confirm password'
        variant='outlined'
        fullWidth
        sx={{ display: 'block', marginTop: 3, marginBottom: 3, width: 350 }}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword ? errors.confirmPassword?.message : ''}
      />
    )}
  />
}

export const SubmitButton = ({ text }: IsText) => {
  return <Box textAlign='center'>
    <Button type='submit' variant='outlined' size="large">
      {text}
    </Button>
  </Box>
}

type IsText = { text: string };

