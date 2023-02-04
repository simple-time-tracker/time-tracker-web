import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'react-oidc-context';

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  return auth.isAuthenticated ? children : <Navigate to={'/'} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

export default PrivateRoute;
