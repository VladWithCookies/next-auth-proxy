import MainLayout from 'components/templates/MainLayout';
import AuthProvider from 'components/atoms/AuthProvider';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AuthProvider>
  );
};
