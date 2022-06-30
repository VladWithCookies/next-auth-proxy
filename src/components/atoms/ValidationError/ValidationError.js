export default function ValidationError({ children, ariaDescribedBy }) {
  return (
    <p aria-describedby={ariaDescribedBy}>
      {children}
    </p>
  );
}
