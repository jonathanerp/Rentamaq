document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formularioProducto');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Previene que el formulario se envíe de forma convencional
        
        // Construir el objeto FormData para enviar los datos del formulario
        const formData = new FormData(formulario);
        
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