window.addEventListener('load', function () {
  const usuario = document.getElementById('usuario');
  const password = document.getElementById('password');

  document.forms[0].addEventListener('submit', async function (event) {
    event.preventDefault();

    const payload = {
      email: usuario.value,
      password: password.value,
    };
    console.log(payload);

    const settings = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    };

    try {
      const res = await fetch('http://localhost:8080/user/login', settings);
      if (res.status === 200) {
        const data = await res.json();
        alert('Inicio de sesión exitoso!');
        localStorage.setItem('token', data.token);
        location.replace('../index.html');
      } else {
        alert(
          'Inicio de sesión incorrecto. Por favor, verifica tu usuario y/o contraseña.'
        );
      }
    } catch (error) {
      console.log(error);
      alert(
        'Ocurrió un error al intentar iniciar sesión intenta mas tarde o contacta al administrador del sitio'
      );
    }
  });
});
