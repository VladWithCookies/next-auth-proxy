import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import useAuth from 'hooks/useAuth';
import Form from 'components/molecules/Form';
import InputField from 'components/molecules/InputField';
import validationSchema from './validationSchema';

export default function SignupForm() {
  const { signup } = useAuth();
  const methods = useForm({ resolver: yupResolver(validationSchema) });

  return (
    <Form
      methods={methods}
      onSubmit={signup}
    >
      <InputField
        id="email"
        name="email"
      />
      <InputField
        id="password"
        name="password"
        type="password"
      />
      <button type="submit">
        Sign Up
      </button>
    </Form>
  );
};
