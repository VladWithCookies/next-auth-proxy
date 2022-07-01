import { useContext } from 'react';
import { useRouter } from 'next/router';

import { httpClient } from 'utils/api/httpClient';
import { AuthorizedContext, SetAuthorizedContext } from 'contexts/auth';

const useAuth = () => {
  const router = useRouter();
  const authorized = useContext(AuthorizedContext);
  const setAuthorized = useContext(SetAuthorizedContext);

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
