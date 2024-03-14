const users = [];

const cargarUsuarios = async() =>{
    try{
        const apiData = await fetch('http://localhost:8080/user');
        const apiDataJson = await apiData.json();
        apiDataJson.sort((a, b) => a.id - b.id);
        console.log(apiDataJson);
        apiDataJson.forEach(producto => {
            users.push(producto);
        });
    }catch (error) {
        console.error('Error fetching data from API:', error);
    }
}

cargarUsuarios();


window.addEventListener('load', function () {

    function renderizarProductos() {
        const userTableBody = document.getElementById('productosTableBody');

            users.forEach((user, i) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${i}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                `;
                userTableBody.appendChild(row);
            });
    }
    renderizarProductos();
});


const btnAgregarProducto = document.getElementById('btnAgregarProducto');

const modalAgregarProducto = document.getElementById('modalAgregarProducto');

const btnCerrarModal = document.querySelector('.close');

function abrirModal() {
    modalAgregarProducto.style.display = 'block';
}

function cerrarModal() {
    modalAgregarProducto.style.display = 'none';
}

btnAgregarProducto.addEventListener('click', abrirModal);
btnCerrarModal.addEventListener('click', cerrarModal);
