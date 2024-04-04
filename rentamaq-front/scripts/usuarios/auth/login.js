window.addEventListener('load', function () {
  const usuario = document.getElementById('usuario');
  const password = document.getElementById('password');

  document.forms[0].addEventListener('submit', async function (event) {
    event.preventDefault();

    const payload = {
      email: usuario.value,
      password: password.value,
    };

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

        // // Obtenemos la información del usuario y la guardamos en el backend
        // const userInfo = await obtenerInformacionUsuario(data.token);
        // guardarInformacionUsuario(userInfo);

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

  // async function obtenerInformacionUsuario(token) {
  //   const settings = {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': `Bearer ${token}`
  //     }
  //   };

  //   try {
  //     const res = await fetch('http://localhost:8080/user/info', settings);
  //     if (res.status === 200) {
  //       return await res.json();
  //     } else {
  //       throw new Error('Error al obtener la información del usuario');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     alert('Error al obtener la información del usuario');
  //   }
  // }

  // async function guardarInformacionUsuario(userInfo) {
  //   const settings = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(userInfo)
  //   };

  //   try {
  //     const res = await fetch('http://localhost:8080/user/profile', settings);
  //     if (res.status === 201) {
  //       console.log('Información del usuario guardada correctamente');
  //     } else {
  //       throw new Error('Error al guardar la información del usuario');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     alert('Error al guardar la información del usuario');
  //   }
  // }
});
