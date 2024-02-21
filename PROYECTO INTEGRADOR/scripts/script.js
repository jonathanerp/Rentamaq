const productosConstruccionPesada = [
  {
    id: 1,
    nombre: 'Generador Eléctrico Glp 2500w 120v Toolcraft Tc3136',
    descripcion: 'Planta Eléctrica a Gasolina 2500W Toolcraft TC3136',
    imagen: './imagenes/imagen3.jfif',
  },
  {
    id: 2,
    nombre: 'Juego de herramientas de 50 piezas',
    descripcion:
      'Kit de herramientas ideal para el hogar está aquí para ayudarte a sobrevivir a todas esas reparaciones y sucesos inesperados; ya sea en la oficina, trabajos de reparación del hogar, en el patio, en la carretera o otro tipo de emergencias.',
    imagen: './imagenes/imagen2.jpg',
  },
  {
    id: 3,
    nombre: 'Excavadora',
    descripcion:
      'La Miniexcavadora Cat 300.9D proporciona potencia y rendimiento en un tamaño compacto para que pueda trabajar en las aplicaciones más estrechas. Su capacidad de pasar por entradas reducidas la convierte en una máquina excelente para trabajos de demolición en interiores.',
    imagen: './imagenes/imagen1.jfif',
  },
];

window.addEventListener('load', function () {
  function renderizarRecomendaciones() {
    const cardsRecomendaciones = document.querySelector('#recomendaciones');
    console.log(cardsRecomendaciones);
    // Limpiar el contenido existente en caso de que se estén mostrando productos antiguos
    cardsRecomendaciones.innerHTML = '';
    productosConstruccionPesada.forEach((prod) => {
      cardsRecomendaciones.innerHTML += `
          <div class="card">
              <img src="${prod.imagen}" alt="${prod.nombre}">
              <div class="card-content">
              <h3>${prod.nombre}</h3>
              <p>${prod.descripcion}</p>
              <a href="./detalle_producto.html?id=${prod.id}">
                  <button class="ver-detalles-btn">Ver Detalles</button>
              </a>
          </div>
      </a>
      </div>
              `;
    });
  }
  renderizarRecomendaciones();
  document
    .querySelector('.logo-section a')
    .addEventListener('click', function () {
      window.location.href = 'index.html';
    });

  // Agrega un evento al formulario de búsqueda
  document
    .getElementById('searchForm')
    .addEventListener('submit', function (event) {
      event.preventDefault(); // Evita que el formulario se envíe por defecto (puede personalizarse según tus necesidades)

      // Obtén el valor del campo de búsqueda
      const searchQuery = document.getElementById('searchInput').value;

      // Puedes redirigir a una página de resultados de búsqueda o realizar otras acciones según el valor de searchQuery
      // Por ejemplo:
      //window.location.href = 'resultados.html?q=' + encodeURIComponent(searchQuery);
    });

  //subida de imágenes y enviar el formulario a través de una solicitud HTTP
  document
    .getElementById('formulario-producto')
    .addEventListener('submit', function (event) {
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
          imagen: imagenProducto.name,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Realizar acciones después de agregar el producto
          console.log('Producto agregado con éxito:', data);
        })
        .catch((error) => {
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
    const productosAleatoriosContainer = document.getElementById(
      'productos-aleatorios-container'
    );

    // Obtener 10 productos aleatorios
    const productosAleatorios = obtenerProductosAleatorios(10);

    // Limpiar el contenido existente en caso de que se estén mostrando productos antiguos
    productosAleatoriosContainer.innerHTML = '';

    // Crear elementos HTML para cada producto y agregarlos al contenedor
    productosAleatorios.forEach((producto) => {
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
});
