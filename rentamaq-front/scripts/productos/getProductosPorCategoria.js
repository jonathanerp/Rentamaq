window.addEventListener('load', function () {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const categoryId = urlSearchParams.get('id');

  cargarProductosPorCategoria(categoryId);

  async function cargarProductosPorCategoria(id) {
    try {
      const res = await fetch(`http://localhost:8080/categorias/${id}`);
      const { products } = await res.json();
      renderizarProductos(products);
    } catch (error) {
      console.error('Error fetching data from API:', error);
    }
  }
});

function renderizarProductos(productos) {
  const cardsRecomendaciones = document.querySelector('#recomendaciones');
  // Limpiar el contenido existente en caso de que se estén mostrando productos antiguos
  cardsRecomendaciones.innerHTML = '';

  productos.forEach((producto) => {
    cardsRecomendaciones.innerHTML += `
        <div class="recoment-card">
            <div class="image-container">
                <img src="${producto.imagenPrincipal}" alt="${producto.nombre}">
            </div>
            <h3>${producto.nombre}</h3>
            <div class="btn-ver">
                <a href="./detalle_producto.html?id=${producto.id}">
                <h2>ver mas</h2>
                </a>
            </div>
        </div>
    `;
  });
}
