import Navigation from 'components/organisms/Navigation';

export default function MainLayout({ children }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};
