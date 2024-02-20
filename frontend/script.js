document.querySelector('.logo-section a').addEventListener('click', function() {
    window.location.href = 'index.html';
});

// Agrega un evento al formulario de búsqueda
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();// Evita que el formulario se envíe por defecto (puede personalizarse según tus necesidades)

// Obtén el valor del campo de búsqueda
const searchQuery = document.getElementById('searchInput').value;


// Puedes redirigir a una página de resultados de búsqueda o realizar otras acciones según el valor de searchQuery
    // Por ejemplo:
//window.location.href = 'resultados.html?q=' + encodeURIComponent(searchQuery);

});


//subida de imágenes y enviar el formulario a través de una solicitud HTTP
document.getElementById('formulario-producto').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombreProducto = document.getElementById('nombre').value;
    const descripcionProducto = document.getElementById('descripcion').value;
    const imagenProducto = document.getElementById('imagen').files[0];



// Realizar la lógica para enviar los datos al servidor
    // Puedes utilizar Fetch API o AJAX para enviar datos al servidor

    // Ejemplo con Fetch API (debes implementar el servidor correspondiente)
    fetch('/api/agregar_producto', {
        method: 'POST',
        body: JSON.stringify({
            nombre: nombreProducto,
            descripcion: descripcionProducto,
            // También necesitas enviar la imagen al servidor, aquí solo se muestra el nombre de la imagen
            imagen: imagenProducto.name
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Realizar acciones después de agregar el producto
        console.log('Producto agregado con éxito:', data);
    })
    .catch(error => {
        // Manejar errores en caso de problemas al agregar el producto
        console.error('Error al agregar el producto:', error);
    });
});



    
// Función para obtener una lista aleatoria de productos
function obtenerProductosAleatorios(cantidad) {
    // Clonar la lista completa para no modificar la original
    const listaClonada = [...listaDeProductosCompleta];
    // Barajar la lista para obtener un orden aleatorio
    const listaBarajada = listaClonada.sort(() => Math.random() - 0.5);
    // Obtener la cantidad especificada de productos aleatorios
    return listaBarajada.slice(0, cantidad);
}



// Función para mostrar productos aleatorios en el área designada
function mostrarProductosAleatoriosEnHome() {
    const productosAleatoriosContainer = document.getElementById('productos-aleatorios-container');

    // Obtener 10 productos aleatorios
    const productosAleatorios = obtenerProductosAleatorios(10);

    // Limpiar el contenido existente en caso de que se estén mostrando productos antiguos
    productosAleatoriosContainer.innerHTML = '';

    // Crear elementos HTML para cada producto y agregarlos al contenedor
    productosAleatorios.forEach(producto => {
        const productoElement = document.createElement('div');
        productoElement.classList.add('producto');

        // Agregar imagen
        const imagenElement = document.createElement('img');
        imagenElement.src = producto.imagen;
        imagenElement.alt = producto.nombre;
        productoElement.appendChild(imagenElement);

        // Agregar nombre y descripción
        const infoElement = document.createElement('div');
        infoElement.classList.add('info-producto');
        infoElement.innerHTML = `<h3>${producto.nombre}</h3><p>${producto.descripcion}</p>`;
        productoElement.appendChild(infoElement);

        // Agregar el producto al contenedor
        productosAleatoriosContainer.appendChild(productoElement);
    });
}

// Llamar a la función para mostrar productos aleatorios al cargar la página
mostrarProductosAleatoriosEnHome();




    
