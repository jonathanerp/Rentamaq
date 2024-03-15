async function cargarCategorias() {
  try {
    const res = await fetch('http://localhost:8080/categorias');
    const categorias = await res.json();

    renderizarCategorias(categorias);

    //   apiDataJson.forEach((producto) => {
    //     productosConstruccionPesada.push(producto);
    //   });
  } catch (error) {
    console.error('Error fetching data from API:', error);
  }
}
function renderizarCategorias(categorias) {
  const contenedorListaCategory = document.querySelector('#carousel__lista');
  // Limpiar el contenido existente en caso de que se estén mostrando categorias antiguos
  contenedorListaCategory.innerHTML = '';

  categorias.forEach((categoria) => {
    contenedorListaCategory.innerHTML += `
        <div class="carousel__elemento">
          <div class="image-container1">
            <img
              src=${categoria.urlImagen}
              alt=${categoria.titulo}
              class="imgCategory"
            />
          </div>
          <div class="title-container">
            <a
              href="/pages/categoria_productos.html?id=${categoria.id}"
              class="anchorCategory"
              class="imgCategory"
            >
              <h3 class="titleCategory">${categoria.titulo}</h3>
            </a>
          </div>
        </div>
      `;
  });
}
cargarCategorias();
