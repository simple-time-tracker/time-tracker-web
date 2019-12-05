import React from 'react';
import { AuthConsumer } from '../../utils/auth/authProvider';

const LoginRedirectPage = () => (
  <AuthConsumer>
    {({ signInRedirect }) => {
      signInRedirect();
      return <span>loading</span>;
    }}
  </AuthConsumer>
);

export default LoginRedirectPage;
