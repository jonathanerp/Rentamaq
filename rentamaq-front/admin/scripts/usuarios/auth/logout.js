function logout() {
  const logoutBtn = document.getElementById('logout');
  logoutBtn.addEventListener('click', function (event) {
    event.preventDefault();
    sessionStorage.clear();
    localStorage.clear();
    alert('Has cerrado sesión correctamente');
    window.location.reload();
  });
}
export default logout;
