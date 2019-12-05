import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { AuthConsumer } from '../../utils/auth/authProvider';

const PrivateRoute = ({ component, ...rest }) => {
  const renderFn = (Component) => (props) => (
    <AuthConsumer>
      {({ isAuthenticated, signInRedirect }) => {
        if (!!Component && isAuthenticated()) {
          return <Component {...props} />;
        }

        signInRedirect();
        return <span>loading</span>;
      }}
    </AuthConsumer>
  );

  return <Route {...rest} render={renderFn(component)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.element,
};

export default PrivateRoute;
