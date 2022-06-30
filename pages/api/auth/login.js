import { setCookie } from 'nookies';

import { proxy } from 'utils/api/httpProxy';

export const config = {
  api: {
    bodyParser: false
  }
};

const loginProxy = (req, res) => new Promise((resolve, reject) => {
  req.url = '/oauth/token';

  proxy.once('error', reject);

  proxy.once('proxyRes', (proxyRes, _req, res) => {
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
  });

  proxy.web(req, res, { selfHandleResponse: true });
})

export default loginProxy;
