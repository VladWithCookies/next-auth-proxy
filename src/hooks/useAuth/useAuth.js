import { useContext } from 'react';
import { useRouter } from 'next/router';

import * as ROUTES from 'constants/routes';
import * as ENDPOINTS from 'constants/endpoints';
import { httpClient } from 'utils/api/httpClient';
import { AuthorizedContext, SetAuthorizedContext } from 'contexts/auth';

const useAuth = () => {
  const router = useRouter();
  const authorized = useContext(AuthorizedContext);
  const setAuthorized = useContext(SetAuthorizedContext);

  const signup = async (params) => {
    await httpClient.post(ENDPOINTS.SIGN_UP_USERS, params);

    router.push(ROUTES.LOGIN)
  };

  const login = async (params) => {
    await httpClient.post(ENDPOINTS.AUTH_LOGIN, { ...params, grantType: 'password' });

    setAuthorized(true);
    router.push('/');
  };

  const logout = async () => {
    await httpClient.delete(ENDPOINTS.AUTH_LOGOUT);

    setAuthorized(false);
    router.push('/');
  };

  return { signup, login, logout, authorized };
};

export default useAuth;
