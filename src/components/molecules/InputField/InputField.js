import { path, split } from 'ramda';
import { useFormContext } from 'react-hook-form';

import Input from 'components/atoms/Input';
import ValidationError from 'components/atoms/ValidationError';

export default function InputField({ id, name, ...props }) {
  const { register, formState: { errors } } = useFormContext();
  const error = path(split('.', name), errors);

  return (
    <div>
      <Input
        id={id}
        {...props}
        {...register(name)}
      />
      {error && (
        <ValidationError ariaDescribedBy={id}>
          {error.message}
        </ValidationError>
      )}
    </div>
  );
}
