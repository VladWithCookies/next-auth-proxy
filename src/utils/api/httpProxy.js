import httpProxy from 'http-proxy';

import { API_URL } from 'constants/api';

export const proxy = httpProxy.createProxyServer({
  target: API_URL,
  autoRewrite: false,
  changeOrigin: true
});
