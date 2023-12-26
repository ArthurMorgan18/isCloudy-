import axios from 'axios';

import { api_endpoints } from '../common/constants';

const { BASE_URL } = api_endpoints;

const apiConfig = {
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

const appFetch = axios.create(apiConfig);

appFetch.interceptors.request.use((config) => {
  config.url += `&appid=${process.env.EXPO_PUBLIC_WEATHER_API_KEY}`;
  return config;
});

export default appFetch;
