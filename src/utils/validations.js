import * as Yup from 'yup';

import { email, phone } from '../constants/expressions';

export const schemaValidationRegister = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must contain at least 2 letters')
    .required('Name cannot be empty'),
  email: Yup.string()
    .email('Invalid email. Please enter it in the format test@example.com')
    .required('Email cannot be empty')
    .matches(email),
  password: Yup.string()
    .required('Password cannot be empty')
    .min(10, 'Name must contain at least 10 signs'),
});

export const schemaValidationLogin = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email. Please enter it in the format test@example.com')
    .required('Email cannot be empty')
    .matches(email),
  password: Yup.string()
    .required('Password cannot be empty')
    .min(10, 'Name must contain at least 10 signs'),
});

export const schemaValidationBook = Yup.object().shape({
  name: Yup.string()
    .min(6, 'Name must contain at least 6 letters')
    .required('Name cannot be empty'),

  email: Yup.string()
    .email('Invalid email. Please enter it in the format test@example.com')
    .required('Email cannot be empty'),

  phone: Yup.string()
    .matches(phone, 'Invalid phone number format,please enter +380123456789 format')
    .required('Phone number cannot be empty'),

  category: Yup.string()
    .oneOf(['career', 'kids', 'abroad', 'exams', 'hobby'], 'Invalid category selection')
    .required('Please select a category'),
});
