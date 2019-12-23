const IS_LOCAL = process.env.NODE_ENV === 'local';
const AUTH_URL = IS_LOCAL
  ? process.env.TIME_TRACKER_AUTH_URL
  : window._env_.TIME_TRACKER_AUTH_URL;

export const IDENTITY_CONFIG = {
  authority: AUTH_URL,
  client_id: IS_LOCAL
    ? process.env.TIME_TRACKER_AUTH_CLIENT_ID
    : window._env_.TIME_TRACKER_AUTH_CLIENT_ID,
  redirect_uri: IS_LOCAL
    ? process.env.TIME_TRACKER_AUTH_REDIRECT_URL
    : window._env_.TIME_TRACKER_AUTH_REDIRECT_URL,
  loadUserInfo: false,
  automaticSilentRenew: false,
  silent_redirect_uri: IS_LOCAL
    ? process.env.TIME_TRACKER_AUTH_SILENT_REDIRECT_URL
    : window._env_.TIME_TRACKER_AUTH_SILENT_REDIRECT_URL,
  post_logout_redirect_uri: IS_LOCAL
    ? process.env.TIME_TRACKER_AUTH_LOGOFF_REDIRECT_URL
    : window._env_.TIME_TRACKER_AUTH_LOGOFF_REDIRECT_URL,
  response_type: 'id_token token',
  scope: 'openid',
};

export const METADATA_OIDC = {
  issuer: IS_LOCAL
    ? process.env.TIME_TRACKER_AUTH_JWT_ISSUER
    : window._env_.TIME_TRACKER_AUTH_JWT_ISSUER,
  jwks_uri: `${AUTH_URL}/certs`,
  authorization_endpoint: `${AUTH_URL}/auth`,
  token_endpoint: `${AUTH_URL}/token`,
  userinfo_endpoint: `${AUTH_URL}/userinfo`,
  end_session_endpoint: `${AUTH_URL}/logout`,
  check_session_iframe: `${AUTH_URL}/certs`,
  introspection_endpoint: `${AUTH_URL}/token/introspect`,
};
