// Supongamos que tienes un objeto producto con datos específicos
const producto = {
    id: 1,
    nombre: 'Nombre del Producto',
    descripcion: 'Texto descriptivo del producto.',
    imagenes: ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg'],
};

// Función para cargar los datos del producto en la página
function cargarDetalleProducto() {
    // Actualizar el título del producto
    const tituloProductoElement = document.getElementById('titulo-producto');
    tituloProductoElement.textContent = producto.nombre;

    // Actualizar la descripción del producto
    const descripcionProductoElement = document.getElementById('descripcion-producto');
    descripcionProductoElement.textContent = producto.descripcion;

    // Crear elementos para la galería de imágenes del producto
    const galeriaImagenesElement = document.getElementById('galeria-imagenes');
    producto.imagenes.forEach(imagen => {
        const imagenElement = document.createElement('img');
        imagenElement.src = imagen;
        imagenElement.alt = producto.nombre;
        galeriaImagenesElement.appendChild(imagenElement);
    });
}

// Llamar a la función para cargar los datos del producto al cargar la página
cargarDetalleProducto();