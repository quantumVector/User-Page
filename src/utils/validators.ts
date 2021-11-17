import * as yup from 'yup';

export const loginFormSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(20).required(),
});

export const signupFormSchema = yup.object().shape({
  fullName: yup.string().required().max(30),
  email: yup.string().email().required(),
  password: yup.string().required().min(8).max(20),
  confirmPassword: yup.string().required()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});