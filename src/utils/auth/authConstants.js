export const IDENTITY_CONFIG = {
  authority: process.env.TIME_TRACKER_AUTH_URL,
  client_id: process.env.TIME_TRACKER_AUTH_CLIENT_ID,
  redirect_uri: process.env.TIME_TRACKER_AUTH_REDIRECT_URL,
  loadUserInfo: false,
  automaticSilentRenew: false,
  silent_redirect_uri: process.env.TIME_TRACKER_AUTH_SILENT_REDIRECT_URL,
  post_logout_redirect_uri: process.env.TIME_TRACKER_AUTH_LOGOFF_REDIRECT_URL,
  response_type: 'id_token token',
  scope: 'openid',
};

export const METADATA_OIDC = {
  issuer: process.env.TIME_TRACKER_AUTH_JWT_ISSUER,
  jwks_uri: `${process.env.TIME_TRACKER_AUTH_URL}/certs`,
  authorization_endpoint: `${process.env.TIME_TRACKER_AUTH_URL}/auth`,
  token_endpoint: `${process.env.TIME_TRACKER_AUTH_URL}/token`,
  userinfo_endpoint: `${process.env.TIME_TRACKER_AUTH_URL}/userinfo`,
  end_session_endpoint: `${process.env.TIME_TRACKER_AUTH_URL}/logout`,
  check_session_iframe: `${process.env.TIME_TRACKER_AUTH_URL}/certs`,
  introspection_endpoint: `${process.env.TIME_TRACKER_AUTH_URL}/token/introspect`,
};
