import Axios from 'axios';

const interceptors = {
  createAuthTokenInterceptor: () =>
    Axios.interceptors.request.use((config) => {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${localStorage.access_token}`;
      return config;
    }),
};

export default interceptors;
