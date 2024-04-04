export async function cargarDatosUsuario() {
  let user;
  const token = localStorage.getItem('token');
  if (token) {
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    const userId = decodedToken.userId;
    const url = `http://localhost:8080/user/${userId}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Error al obtener la información del usuario');
    }
    user = await response.json();

    return user;
  } else {
    throw new Error('Error al obtener la información del usuario');
  }
}
