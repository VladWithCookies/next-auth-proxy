import { FormProvider } from 'react-hook-form';

export default function Form({ onSubmit, methods, children, ...props }) {
  return (
    <FormProvider {...methods}>
      <form
        {...props}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );
};
