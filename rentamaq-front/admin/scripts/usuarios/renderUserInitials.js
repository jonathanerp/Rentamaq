import { cargarDatosUsuario } from './getUserData.js';

window.addEventListener('load', async function () {
  const userData = await cargarDatosUsuario();

  const initials = `${userData.name.charAt(0).toUpperCase()}${userData.lastname
    .charAt(0)
    .toUpperCase()}`;

  mostrarIniciales(initials);

  function mostrarIniciales(initials) {
    const initialsElement = document.querySelector('.iniciales');
    initialsElement.textContent = initials;
  }
});
