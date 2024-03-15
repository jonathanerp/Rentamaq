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

    function renderizarCategorias() {
        const categoriashtml = document.querySelector('#categoriaId');
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

    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Previene que el formulario se envíe de forma convencional
        
        // Construir el objeto FormData para enviar los datos del formulario
        const formData = new FormData(formulario);
        for (var pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }
        
        document.getElementById('error-nombre').textContent = "";
        document.getElementById('error-descripcion').textContent = "";

        // Realizar la solicitud AJAX POST al endpoint del controlador
        fetch('http://localhost:8080/productos/guardar', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                return response.json()
                    .then(function(err) {
                        throw err;
                    });
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            alert('Producto guardado exitosamente');
        }).catch(error => {
            console.log(error);
            if (error.nombre) {
                document.getElementById('error-nombre').textContent = error.nombre;
            }
            if (error.descripcion) {
                document.getElementById('error-descripcion').textContent = error.descripcion;
            }
        })
    })
})