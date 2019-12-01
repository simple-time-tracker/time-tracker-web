import React from 'react';
import { AuthConsumer } from '../../utils/auth/authProvider';

const SilentRenewPage = () => (
  <AuthConsumer>
    {({ signInSilentCallback }) => {
      signInSilentCallback();
      return <span>loading</span>;
    }}
  </AuthConsumer>
);

export default SilentRenewPage;
