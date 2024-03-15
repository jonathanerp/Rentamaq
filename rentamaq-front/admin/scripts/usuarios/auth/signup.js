window.addEventListener('load', function () {
  const email = document.getElementById('email');
  const nuevopassword = document.getElementById('nuevopassword');
  const confirmacionpassword = document.getElementById('confirmacionpassword');
  const nombre = document.getElementById('nombre');
  const apellido = document.getElementById('apellido');


  document.forms[0].addEventListener('submit', async (event) => {
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
      const res = await fetch('http://localhost:8080/user/signup', settings);
      if (res.status === 201) {
        alert('Usted se ha registrado correctamente, ya es rentamaq!');
        location.replace('./login.html');
      }
    } catch (error) {
      console.log(error);
    }
  });
});
