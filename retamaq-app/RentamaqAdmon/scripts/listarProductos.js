const productos = [];

const cargarProductos = async() =>{
    try{
        const apiData = await fetch('http://localhost:8080/productos');
        const apiDataJson = await apiData.json();
        apiDataJson.sort((a, b) => a.id - b.id);
        console.log(apiDataJson);
        apiDataJson.forEach(producto => {
            productos.push(producto);
        });
    }catch (error) {
        console.error('Error fetching data from API:', error);
    }
}

cargarProductos();


window.addEventListener('load', function () {

    function renderizarProductos() {
        const productosTableBody = document.getElementById('productosTableBody');

            productos.forEach(producto => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${producto.id}</td>
                    <td>${producto.nombre}</td>
                    <td>${producto.categoria.titulo}</td>
                `;
                productosTableBody.appendChild(row);
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
