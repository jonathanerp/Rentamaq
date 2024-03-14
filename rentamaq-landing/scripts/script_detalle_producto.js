window.addEventListener('load', function () {
  cargarProductos();

  async function cargarProductos() {
    try {
      const res = await fetch('http://localhost:8080/productos');
      const productos = await res.json();

      console.log('aca', productos);

      renderizarProductos(productos);

    } catch (error) {
      console.error('Error fetching data from API:', error);
    }
  }

  const urlSearchParams = new URLSearchParams(window.location.search);
  const prodId = urlSearchParams.get('id');

  function renderizarProductos(productos) {
    const divDetalleProducto = document.querySelector('#detalle-producto');
    // Limpiar el contenido existente en caso de que se estén mostrando productos antiguos
    divDetalleProducto.innerHTML = '';

    productos.forEach((prod) => {
      if (prod.id.toString() === prodId) {
        divDetalleProducto.innerHTML += `
        <div class="div-imagen">
            <img src=${prod.urlImagen} alt=${prod.nombre} />
        </div>
        <div class="div-texto">
            <h1>${prod.nombre}</h1>
            <div>
                <h3>Descripción General</h3>
                <p>
                ${prod.descripcion}
                </p>
            </div>
        </div>
              `;
      }
    });
  }

  cargarCaracteristicas();

  async function cargarCaracteristicas() {
    try {
      const res = await fetch(`http://localhost:8080/caracteristicas/${prodId}`);
      const caracteristicas = await res.json();

      console.log('aca', caracteristicas);

      renderizarCaracteristicas(caracteristicas);

    } catch (error) {
      console.error('Error fetching data from API:', error);
    }
  }

  function renderizarCaracteristicas(caracteristicas) {
    const divCaracteristicaProducto = document.querySelector('#caracteristica-producto');

    divCaracteristicaProducto.innerHTML = '';
    caracteristicas.forEach((car) => {
      divCaracteristicaProducto.innerHTML += `
        <li id="caracteristica-lista"><img src=${car.urlImagen} alt="No disponible" class="icono"/></i>${car.descripcion}</li>
            `;
    })
  };

});