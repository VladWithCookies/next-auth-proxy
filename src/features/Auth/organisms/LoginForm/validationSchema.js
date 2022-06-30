import * as yup from 'yup';

import { MIN_PASSWORD_LENGTH } from 'constants/auth';

export default yup.object({
  username: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .min(MIN_PASSWORD_LENGTH)
    .required()
});
