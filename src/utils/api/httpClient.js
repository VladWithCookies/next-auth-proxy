import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

export const apiInstance = axios.create({ baseURL: 'http://localhost:3000' });
export const httpClient = applyCaseMiddleware(apiInstance, { ignoreHeaders: true });
