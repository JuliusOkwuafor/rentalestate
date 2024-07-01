import * as yup from 'yup';

export const leadSchema = yup.object({
  // Lead Information:
  name: yup.string().required('Name Is required'),
  email: yup.string().email().required('Email Is required'),
  phoneNumber: yup.string().required('Phone Number is required'),
});
