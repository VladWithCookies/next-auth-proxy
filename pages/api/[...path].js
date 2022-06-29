import { parseCookies } from 'nookies';

import { proxy } from 'utils/api/httpProxy';

export const config = {
  api: {
    bodyParser: false
  }
};

const apiProxy = (req, res) => new Promise((_resolve, reject) => {
  const { accessToken } = parseCookies({ req });

  req.headers.cookie = '';

  if (accessToken) {
    req.headers.authorization = `Bearer ${accessToken}`;
  }

  proxy.once('error', reject);
  proxy.web(req, res);
});

export default apiProxy;
