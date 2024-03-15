const productos = [];

const cargarProductos = async() =>{
    try{
        const apiData = await fetch('http://localhost:8080/productos');
        const apiDataJson = await apiData.json();
        console.log(apiDataJson);
    
        apiDataJson.forEach(producto => {
            productos.push(producto);
        });
    }catch (error) {
        console.error('Error fetching data from API:', error);
    }
}

cargarProductos();


const categorias = [];

const cargarCategorias = async() =>{
    try{
        const apiData = await fetch('http://localhost:8080/categorias');
        const apiDataJson = await apiData.json();
        console.log(apiDataJson);
    
        apiDataJson.forEach(categoria => {
            categorias.push(categoria);
        });
    }catch (error) {
        console.error('Error fetching data from API:', error);
    }
}

cargarCategorias();


window.addEventListener('load', function () {
    function renderizarProductos() {
        const productoshtml = document.querySelector('#productos');
        productoshtml.innerHTML = '';
        productos.forEach(function(prod) {
            productoshtml.innerHTML += `
                <option value="${prod.id}">${prod.nombre}</option>
            `;
        });
    }
    renderizarProductos();

    function renderizarCategorias() {
        const categoriashtml = document.querySelector('#categorias');
        categoriashtml.innerHTML = '';
        categorias.forEach(function(cat) {
            categoriashtml.innerHTML += `
                <option value="${cat.id}">${cat.titulo}</option>
            `;
        });
    }
    renderizarCategorias();
});

document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formularioProducto');

    formulario.addEventListener('submit', async function (event) {
        event.preventDefault();
        const productoSelect = document.getElementById('productos');
        const productoSeleccionado = productoSelect.value;
        console.log('Producto seleccionado:', productoSeleccionado);
        
        const categoriaSelect = document.getElementById('categorias');
        const categoriaSeleccionada = categoriaSelect.value;
        console.log('Categoria seleccionada:', categoriaSeleccionada);
        
        try {
            const response = await fetch(`http://localhost:8080/productos/${productoSeleccionado}/categoria/${categoriaSeleccionada}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const data = await response.json();
            alert('Categoria fue agregada exitosamente');
            console.log('Respuesta del servidor:', data);
            window.location.reload();
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
        }
    });
});