import axios from 'axios';
import { identity } from 'ramda';
import applyCaseMiddleware from 'axios-case-converter';

const apiInstance = axios.create({ baseURL: 'http://localhost:3000' });

apiInstance.interceptors.response.use(identity, async function(error) {
  if (error.response?.status === 401) {
    await axios.post('/api/auth/refresh');

    return axios(error.response.config);
  }

  return Promise.reject(error);
});

export const httpClient = applyCaseMiddleware(apiInstance, { ignoreHeaders: true });
