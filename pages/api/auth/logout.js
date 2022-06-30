import { destroyCookie } from 'nookies';

const logout = (_req, res) => {
  destroyCookie({ res }, 'accessToken', { path: '/' });
  destroyCookie({ res }, 'refreshToken', { path: '/' });

  res.end();
};

export default logout;
