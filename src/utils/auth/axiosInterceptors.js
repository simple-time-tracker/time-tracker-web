import Axios from 'axios';

const interceptors = {
  createAuthTokenInterceptor: () =>
    Axios.interceptors.request.use((config) => {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${localStorage.access_token}`;
      return config;
    }),

  createUnauthorizedRequestInterceptor: () => {
    Axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.data.status === 401) {
          localStorage.removeItem('access_token');
          localStorage.removeItem('id_token');
          window.location = '/login';
        }
        return Promise.reject(error);
      }
    );
  },
};

export default interceptors;
