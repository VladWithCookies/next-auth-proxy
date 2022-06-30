import * as yup from 'yup';

import { MIN_PASSWORD_LENGTH } from 'constants/auth';

export default yup.object({
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .min(MIN_PASSWORD_LENGTH)
    .required()
});
