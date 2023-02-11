const setToken = (token) => localStorage.setItem('authToken', token);

const getToken = () => localStorage.getItem('authToken');

const clearToken = () => localStorage.clear('authToken');

export default {
  setToken,
  getToken,
  clearToken,
};
