import httpProxy from 'http-proxy';
import { setCookie } from 'nookies';

import { API_URL } from 'constants/api';

export const proxy = httpProxy.createProxyServer({
  target: API_URL,
  autoRewrite: false,
  changeOrigin: true
});

export const onProxyResponse = (resolve, reject) => (proxyRes, _req, res) => {
  let body = '';

  proxyRes.on('data', (chunk) => {
    body += chunk;
  });

  proxyRes.once('error', reject);

  proxyRes.on('end', () => {
    const isSuccess = proxyRes.statusCode === 200;

    if (isSuccess) {
      const options =  {
        path: '/',
        sameSite: true,
        httpOnly: true
      };

      const { access_token: accessToken, refresh_token: refreshToken } = JSON.parse(body);

      setCookie({ res }, 'accessToken', accessToken, options);
      setCookie({ res }, 'refreshToken', refreshToken, options);

      res.status(200).end();
    } else {
      res.status(proxyRes.statusCode).json(body);
    }

    resolve();
  });
};
