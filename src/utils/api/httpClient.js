import axios from 'axios';
import { identity } from 'ramda';
import applyCaseMiddleware from 'axios-case-converter';

import { AUTH_REFRESH } from 'constants/endpoints';

const apiInstance = axios.create({ baseURL: 'http://localhost:3000' });

apiInstance.interceptors.response.use(identity, async function(error) {
  if (error.response?.status === 401) {
    await axios.post(AUTH_REFRESH);

    return axios(error.response.config);
  }

  return Promise.reject(error);
});

export const httpClient = applyCaseMiddleware(apiInstance, { ignoreHeaders: true });
