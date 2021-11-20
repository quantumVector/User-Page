import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';

export const FullNameField = () => {
  const { control, formState: { errors } } = useFormContext();

  return <Controller name='fullName' control={control} defaultValue=''
    render={({ field }) => (
      <TextField
        {...field}
        label='Full Name'
        variant='outlined'
        fullWidth
        sx={{ display: 'block', marginTop: 3, marginBottom: 3, width: 400 }}
        error={!!errors.fullName}
        helperText={errors.fullName ? errors.fullName?.message : ''}
      />
    )}
  />
}

export const EmailField = () => {
  const { control, formState: { errors } } = useFormContext();

  return <Controller name='email' control={control} defaultValue=''
    render={({ field }) => (
      <TextField
        {...field}
        label='Email'
        variant='outlined'
        fullWidth
        sx={{ display: 'block', marginTop: 3, marginBottom: 3, width: 400 }}
        error={!!errors.email}
        helperText={errors.email ? errors.email?.message : ''}
      />
    )}
  />
}

export const PasswordField = () => {
  const { control, formState: { errors } } = useFormContext();

  return <Controller name='password' control={control} defaultValue=''
    render={({ field }) => (
      <TextField
        {...field}
        type='password'
        label='Password'
        variant='outlined'
        fullWidth
        sx={{ display: 'block', marginTop: 3, marginBottom: 3, width: 400 }}
        error={!!errors.password}
        helperText={errors.password ? errors.password?.message : ''}
      />
    )}
  />
}

export const ConfirmPasswordField = () => {
  const { control, formState: { errors } } = useFormContext();

  return <Controller name='confirmPassword' control={control} defaultValue=''
    render={({ field }) => (
      <TextField
        {...field}
        type='password'
        label='Confirm password'
        variant='outlined'
        fullWidth
        sx={{ display: 'block', marginTop: 3, marginBottom: 3, width: 400 }}
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

