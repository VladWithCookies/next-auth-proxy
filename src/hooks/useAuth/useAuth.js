import { useContext } from 'react';
import { useRouter } from 'next/router';

import { httpClient } from 'utils/api/httpClient';
import { AuthContext } from 'contexts/AuthContext';

const useAuth = () => {
  const router = useRouter();
  const { authorized, setAuthorized } = useContext(AuthContext);

  const signup = async (params) => {
    await httpClient.post('/api/json/sign_up/users', params);

    router.push('/login')
  };

  const login = async (params) => {
    await httpClient.post('/api/auth/login', { ...params, grantType: 'password' });

    setAuthorized(true);
    router.push('/');
  };

  const logout = async () => {
    await httpClient.delete('/api/auth/logout');

    setAuthorized(false);
    router.push('/');
  };

  return { signup, login, logout, authorized };
};

export default useAuth;
