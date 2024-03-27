document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencia al botón de búsqueda
    const searchButton = document.getElementById('searchButton');
    
    // Agregar un event listener al botón de búsqueda
    searchButton.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe
        
        // Obtener el valor del campo de búsqueda
        const nombre = document.getElementById('searchInput').value.trim();
        const fechaInicio = document.getElementById('fechaInicio').value;
        const fechaFin = document.getElementById('fechaFin').value;

        if (nombre && fechaInicio && fechaFin) {
            buscarProductosPorNombreYFecha(nombre, fechaInicio, fechaFin);
        } else if (nombre && fechaInicio === '' && fechaFin === '') {
            buscarProductosPorNombre(nombre);
        } else if (fechaInicio && fechaFin) {
            buscarProductosPorFecha(fechaInicio, fechaFin);
        } else {
        alert('Por favor, ingresa al menos un campo para realizar la búsqueda.');
        }
    });
});

// Función para buscar productos
async function buscarProductosPorNombre(nombre) {
    try {
        // Realizar una solicitud al servidor con el término de búsqueda
        const response = await fetch(`http://localhost:8080/productos/producto/${nombre}`);
        
        // Verificar si la solicitud fue exitosa
        if (!response.ok) {
            throw new Error('No se pudo obtener la información del servidor.');
        }
        
        // Convertir la respuesta a formato JSON
        const productos = await response.json();
        console.log(productos);

        // Mostrar los resultados de la búsqueda en la interfaz de usuario
        mostrarResultadosBusqueda(productos);
        
    } catch (error) {
        // Manejar cualquier error que ocurra durante la búsqueda
        console.error('Error al buscar productos:', error);
    }
}

async function buscarProductosPorFecha(fechaInicio, fechaFin) {
    try {
        // Realizar una solicitud al servidor con el término de búsqueda
        const response = await fetch(`http://localhost:8080/productos/fecha?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`);
        
        // Verificar si la solicitud fue exitosa
        if (!response.ok) {
            throw new Error('No se pudo obtener la información del servidor.');
        }
        
        // Convertir la respuesta a formato JSON
        const productos = await response.json();
        console.log(productos);

        // Mostrar los resultados de la búsqueda en la interfaz de usuario
        mostrarResultadosBusqueda(productos);
        
    } catch (error) {
        // Manejar cualquier error que ocurra durante la búsqueda
        console.error('Error al buscar productos:', error);
    }
}

async function buscarProductosPorNombreYFecha(nombre, fechaInicio, fechaFin) {
    try {
        // Realizar una solicitud al servidor con el término de búsqueda
        const response = await fetch(`http://localhost:8080/productos/nombreyfecha?nombre=${nombre}&fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`);
        
        // Verificar si la solicitud fue exitosa
        if (!response.ok) {
            throw new Error('No se pudo obtener la información del servidor.');
        }
        
        // Convertir la respuesta a formato JSON
        const productos = await response.json();
        console.log(productos);

        // Mostrar los resultados de la búsqueda en la interfaz de usuario
        mostrarResultadosBusqueda(productos);
        
    } catch (error) {
        // Manejar cualquier error que ocurra durante la búsqueda
        console.error('Error al buscar productos:', error);
    }
}


// Función para mostrar los resultados de la búsqueda en la interfaz de usuario
function mostrarResultadosBusqueda(productos) {
    // Limpiar los resultados anteriores de la búsqueda
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';

    // Ocultar el contenedor de recomendaciones
    const recomendacionesContainer = document.querySelector('.content-recoment-cards');
    recomendacionesContainer.style.display = 'none';

    // Ocultar el título de recomendaciones
    const recomendacionesTitle = document.querySelector('.title-recomend');
    recomendacionesTitle.style.display = 'none';

    // Mostrar el título "Resultados"
    const resultadosTitle = document.createElement('h2');
    resultadosTitle.textContent = 'Resultados';
    resultsContainer.appendChild(resultadosTitle);
    
    // Mostrar cada producto en la página
    productos.forEach(producto => {
        const productoElement = document.createElement('div');
        productoElement.classList.add('recoment-card'); // Agregar la clase 'recoment-card'
        productoElement.innerHTML = `
            <div class="image-container">
                <img src="${producto.imagenPrincipal}" alt="${producto.nombre}">
            </div>
            <h3>${producto.nombre}</h3>
            <div class="btn-ver">
                <a href="./pages/detalle_producto.html?id=${producto.id}">
                    <h2>Ver más</h2>
                </a>
            </div>
        `;
        resultsContainer.appendChild(productoElement);
    });
}