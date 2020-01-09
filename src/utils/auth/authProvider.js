import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuthService from './authService';
import axiosInterceptors from './axiosInterceptors';

const AuthContext = React.createContext({
  signInRedirectCallback: () => ({}),
  logout: () => ({}),
  signOutRedirectCallback: () => ({}),
  isAuthenticated: () => ({}),
  signInRedirect: () => ({}),
  signInSilentCallback: () => ({}),
  createSignInRequest: () => ({}),
});

export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends Component {
  authService;

  static propTypes = {
    children: PropTypes.element,
  };

  constructor(props) {
    super(props);
    this.authService = new AuthService();
    axiosInterceptors.createAuthTokenInterceptor();
    axiosInterceptors.createUnauthorizedRequestInterceptor();
  }

  render() {
    return (
      <AuthContext.Provider value={this.authService}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
