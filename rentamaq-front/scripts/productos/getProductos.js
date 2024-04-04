window.addEventListener('load', function () {
  function renderizarProductos(productos) {
    const cardsRecomendaciones = document.querySelector('#recomendaciones');
    cardsRecomendaciones.innerHTML = '';

    productos.forEach((producto) => {
      cardsRecomendaciones.innerHTML += `
          <div class="recoment-card">
              <div class="image-container">
                  <img src="${producto.imagenPrincipal}" alt="${producto.nombre}">
              </div>
              <h3>${producto.nombre}</h3>
              <div class="btn-ver">
                  <a href="./pages/detalle_producto.html?id=${producto.id}">
                  <h2>ver mas</h2>
                  </a>
              </div>
          </div>
      `;
    });
  }
  async function cargarProductos() {
    try {
      const res = await fetch('http://localhost:8080/productos');
      const productos = await res.json();
      console.log(productos);
      renderizarProductos(productos);
    } catch (error) {
      console.error('Error fetching data from API:', error);
    }
  }
  cargarProductos();
});
