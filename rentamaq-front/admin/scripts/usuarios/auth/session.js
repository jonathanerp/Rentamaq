function userSession() {
  const userSection = document.querySelector('.user-info');
  const btnSection = document.querySelector('.btn-section');
  const token = localStorage.getItem('token');
  const adminSection = document.querySelector('.admin-section');
  let userLog = false;

  if (!token) {
    return userLog;
  }
  userLog = true;
  userSection.style.display = 'flex';
  btnSection.style.display = 'none';
  const decodedToken = JSON.parse(atob(token.split('.')[1]));

  if (decodedToken.roles[0] === 'ROLE_ADMIN') {
    adminSection.style.display = 'flex';
  }
  
  return userLog;
}

export default userSession;
