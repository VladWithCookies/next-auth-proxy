import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import useAuth from 'hooks/useAuth';
import Form from 'components/molecules/Form';
import InputField from 'components/molecules/InputField';
import validationSchema from './validationSchema';
import signup from '../../../../../pages/signup';

export default function LoginForm() {
  const { login } = useAuth();
  const methods = useForm({ resolver: yupResolver(validationSchema) });

  return (
    <Form
      methods={methods}
      onSubmit={login}
    >
      <InputField
        id="username"
        name="username"
      />
      <InputField
        id="password"
        name="password"
        type="password"
      />
      <button type="submit">
        Login
      </button>
    </Form>
  );
};
