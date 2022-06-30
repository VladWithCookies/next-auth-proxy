import { parseCookies } from 'nookies';

const authStatus = (req, res) => {
  const { accessToken } = parseCookies({ req });

  res.status(200).json({ authorized: Boolean(accessToken) });
};

export default authStatus;
