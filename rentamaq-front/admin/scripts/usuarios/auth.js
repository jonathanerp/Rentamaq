import logout from './auth/logout.js';
import userSession from './auth/session.js';

window.addEventListener('load', function () {
  userSession();
  logout();
});
