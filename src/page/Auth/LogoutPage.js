import React, { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';
import { Navigate } from 'react-router-dom';
import authTokenApi from '../../utils/auth/authTokenApi';

const LogoutPage = () => {
  const auth = useAuth();
  useEffect(() => {
    if (auth.isAuthenticated) {
      authTokenApi.clearToken();
      auth.signoutPopup();
    }
  });

  return <Navigate to={'/'} />;
};

export default LogoutPage;
