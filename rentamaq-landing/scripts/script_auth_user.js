document.addEventListener('DOMContentLoaded', function () {
  // ----------------------------------------------------------------
  //SIGNUP
  const formRegistro = document.getElementById('registroform');
  const email = document.getElementById('email');
  const nuevopassword = document.getElementById('nuevopassword');
  const confirmacionpassword = document.getElementById('confirmacionpassword');
  const botonRegistrar = document.querySelector('#registroform button');
  const nombre = document.getElementById('nombre');
  const apellido = document.getElementById('apellido');

  document.forms[1].addEventListener('submit', async (event) => {
    event.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (nombre.value.trim() === '' || apellido.value.trim() === '') {
      alert('Por favor, ingrese su nombre y apellido');
      return;
    } else if (!emailPattern.test(email.value.trim())) {
      alert('El correo electrónico no es válido');
      email.value = '';
      email.focus();
      return;
    } else if (nuevopassword.value.trim() === '') {
      alert('ingrese una contraseña valida');
      nuevopassword.focus();
      return;
    } else if (
      nuevopassword.value.trim() !== '' &&
      nuevopassword.value !== confirmacionpassword.value
    ) {
      alert('Las contraseñas no coinciden');
      nuevopassword.value = '';
      confirmacionpassword.value = '';
      password.focus();
      return;
    }

    const payload = {
      name: nombre.value,
      lastname: apellido.value,
      email: email.value,
      password: nuevopassword.value,
      roles: ['ROLE_CLIENT'],
    };

    console.log(payload);
    const settings = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    };

    try {
      const res = await fetch('http://localhost:8080/auth/signup', settings);
      if (res.status === 201) {
        alert('Usted se ha registrado correctamente, ya es rentamaq!');
        location.replace('auth.html');
      }
    } catch (error) {
      console.log(error);
    }
  });

  // ----------------------------------------------------------------
  //lOGIN

  document.getElementById('loginform').addEventListener('submit', async function (event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;

    const payload = {
      email: usuario,
      password: password
    };

    const settings = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    };

    try {
      const res = await fetch('http://localhost:8080/auth/login', settings);
      if (res.status === 200) {
        const data = await res.json();
        alert('Inicio de sesión exitoso!');
        localStorage.setItem('token', data.token);
        window.location.href = 'index.html?pass';
      } else {
        alert('Inicio de sesión incorrecto. Por favor, verifica tu usuario y/o contraseña.');
      }
    } catch (error) {
      console.log(error);
      alert('Ocurrió un error al intentar iniciar sesión intenta mas tarde o contacta al administrador del sitio');
    }
  });

  const urlParams = new URLSearchParams(window.location.search);
  const form = urlParams.get('form');
  const enlaceRegistro = document.getElementById('sinregistrar');
  const enlaceLogin = document.getElementById('registrado');

  if (form === 'registro') {
    document.getElementById('contenedorlogin').style.display = 'none';
    document.getElementById('contenedorregistro').style.display = 'flex';
  } else {
    document.getElementById('contenedorregistro').style.display = 'none';
    document.getElementById('contenedorlogin').style.display = 'flex';
  }

  enlaceRegistro.addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('contenedorlogin').style.display = 'none';
    document.getElementById('contenedorregistro').style.display = 'flex';
  });

  enlaceLogin.addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('contenedorregistro').style.display = 'none';
    document.getElementById('contenedorlogin').style.display = 'flex';
  });
});
