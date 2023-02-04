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
};
