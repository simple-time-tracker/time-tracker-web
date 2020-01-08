import { UserManager, WebStorageStateStore } from 'oidc-client';
import { IDENTITY_CONFIG, METADATA_OIDC } from './authConstants';

export default class AuthService {
  UserManager;

  accessToken;

  constructor() {
    this.UserManager = new UserManager({
      ...IDENTITY_CONFIG,
      userStore: new WebStorageStateStore({ store: window.localStorage }),
      metadata: {
        ...METADATA_OIDC,
      },
    });

    this.UserManager.events.addUserLoaded((user) => {
      this.accessToken = user.access_token;
      this.setUserInfo({
        accessToken: this.accessToken,
        idToken: user.id_token,
      });
      if (window.location.href.indexOf('login') !== -1) {
        this.navigateToScreen();
      }
    });
    this.UserManager.events.addAccessTokenExpired(() => {
      this.UserManager.signinSilent();
    });
  }

  signInSilentCallback = () => {
    this.UserManager.signinSilentCallback();
  };

  getUser = async () => {
    const user = await this.UserManager.getUser();
    if (!user) {
      return this.UserManager.signinRedirectCallback();
    }
    return user;
  };

  signInRedirectCallback = () => {
    this.UserManager.signinRedirectCallback();
  };

  parseJwt = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  };

  setUserInfo = (authResult) => {
    const data = this.parseJwt(this.accessToken);

    this.setSessionInfo(authResult);
    this.setUser(data);
  };

  signInRedirect = () => {
    localStorage.setItem('redirectUri', window.location.pathname);
    this.UserManager.signinRedirect({});
  };

  setUser = (data) => {
    localStorage.setItem('userId', data.sub);
  };

  navigateToScreen = () => {
    window.location = '/';
  };

  setSessionInfo = (authResult) => {
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
  };

  isAuthenticated = () => {
    const accessToken = localStorage.getItem('access_token');
    return !!accessToken;
  };

  loginIfExpired = async () => {
    const user = await this.UserManager.getUser();
    if (user.expired) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('id_token');
      this.navigateToScreen();
    }
  };

  logout = () => {
    this.UserManager.signoutRedirect({
      id_token_hint: localStorage.getItem('id_token'),
    });
    this.UserManager.clearStaleState();
  };

  signOutRedirectCallback = () => {
    this.UserManager.signoutRedirectCallback().then(() => {
      localStorage.clear();
      window.location = '/login';
    });
    this.UserManager.clearStaleState();
  };
}
