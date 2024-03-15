import userSession from './auth/session.js';
import { cargarDatosUsuario } from './getUserData.js';

window.addEventListener('load', function (e) {
  async function renderizarUsuario() {
    const userLog = userSession();
    if (!userLog) {
      location.replace('../index.html');
    }
    const user = await cargarDatosUsuario();
    const userContenedor = document.querySelector('#user-contenedor');
    userContenedor.innerHTML = '';

    userContenedor.innerHTML += `
      <div>${user.name}</div>
      <div>${user.lastname}</div>
      <div>${user.email}</div>
    `;
  }
  renderizarUsuario();
});
