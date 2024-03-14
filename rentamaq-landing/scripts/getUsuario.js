window.addEventListener('DOMContentLoaded', function () {
async function cargarDatosUsuario() {
    try {
        const token = localStorage.getItem('token');
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        const userId = decodedToken.userId;
        const url = `http://localhost:8080/user/${userId}`;
        const response = await fetch(url);

        if (response.ok) {
            const userData = await response.json();
            console.log('Información del usuario:', userData);
        } else {
            throw new Error('Error al obtener la información del usuario');
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

function agregarEventoTarjeta(userData) {
    const initialsElement = document.querySelector('#iniciales');
    initialsElement.addEventListener('click', function () {
        const card = document.createElement('div');
        card.classList.add('user-card');

        const name = document.createElement('p');
        name.textContent = 'Nombre: ' + userData.name.toUpperCase();

        const lastname = document.createElement('p');
        lastname.textContent = 'Apellido: ' + userData.lastname.toUpperCase();

        const email = document.createElement('p');
        email.textContent = 'Email: ' + userData.email;

        card.appendChild(name);
        card.appendChild(lastname);
        card.appendChild(email);

        const infoUser = document.querySelector('.infoUser');
        infoUser.innerHTML = '';
        infoUser.appendChild(card);
    });
}
    cargarDatosUsuario();
    agregarEventoTarjeta();
});