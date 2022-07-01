import { parseCookies } from 'nookies';

import { proxy, onProxyResponse } from 'utils/api/httpProxy';

export const config = {
  api: {
    bodyParser: false
  }
};

const refreshProxy = (req, res) => new Promise((resolve, reject) => {
  req.url = '/oauth/token';

  proxy.once('error', reject);

  proxy.once('proxyReq', (proxyReq, req) => {
    const { refreshToken } = parseCookies({ req });

    req.headers.cookie = '';

    const body = JSON.stringify({
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    });

    proxyReq.setHeader('Content-Type','application/json');
    proxyReq.setHeader('Content-Length', Buffer.byteLength(body));
    proxyReq.write(body);
    proxyReq.end();
  });

  proxy.once('proxyRes', onProxyResponse(resolve, reject));
  proxy.web(req, res, { selfHandleResponse: true });
})

export default refreshProxy;
