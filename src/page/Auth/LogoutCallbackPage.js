import React from 'react';
import { AuthConsumer } from '../../utils/auth/authProvider';

const LogoutCallbackPage = () => (
  <AuthConsumer>
    {({ signOutRedirectCallback }) => {
      signOutRedirectCallback();
      return <span>loading</span>;
    }}
  </AuthConsumer>
);

export default LogoutCallbackPage;
