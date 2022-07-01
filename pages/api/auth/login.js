import { OAUTH_TOKEN } from 'constants/endpoints';
import { proxy, onProxyResponse } from 'utils/api/httpProxy';

export const config = {
  api: {
    bodyParser: false
  }
};

const loginProxy = (req, res) => new Promise((resolve, reject) => {
  req.url = OAUTH_TOKEN;
  req.headers.cookie = '';

  proxy.once('error', reject);
  proxy.once('proxyRes', onProxyResponse(resolve, reject));
  proxy.web(req, res, { selfHandleResponse: true });
})

export default loginProxy;
