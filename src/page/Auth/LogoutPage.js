import React from 'react';
import { AuthConsumer } from '../../utils/auth/authProvider';

const LogoutPage = () => (
  <AuthConsumer>
    {({ logout }) => {
      logout();
      return <span>loading</span>;
    }}
  </AuthConsumer>
);

export default LogoutPage;
