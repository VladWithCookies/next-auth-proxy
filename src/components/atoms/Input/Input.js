import { forwardRef } from 'react';

export default forwardRef(function Input(props, ref) {
  return (
    <input
      {...props}
      ref={ref}
    />
  );
});
