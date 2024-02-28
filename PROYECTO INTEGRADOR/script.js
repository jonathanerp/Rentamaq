const productosConstruccionPesada = [
  {
    id: 1,
    name: 'EXCAVADORA KOMATSU',
    image: 'imagenes/recomendado1.jpg',
    description: 'Descripción del producto 1...',
  },
  {
    id: 2,
    name: 'BULLDOZER CATERPILLAR',
    image: 'imagenes/recomendado2.jpg',
    description: 'Descripción del producto 2...',
  },
  {
    id: 3,
    name: 'RETROEXCAVADORA CATERPILLAR',
    image: 'imagenes/recomendado3.jpg',
    description: 'Descripción del producto 3...',
  },
  {
    id: 4,
    name: 'APLANADORA CATERPILLAR',
    image: 'imagenes/recomendado4.jpg',
    description: 'Descripción del producto 4...',
  },
  {
    id: 5,
    name: 'MINICARGADOR BOBCAT',
    image: 'imagenes/recomendado5.jpg',
    description: 'Descripción del producto 5...',
  },
  {
    id: 6,
    name: 'MONTACARGA MITSUBISHI',
    image: 'imagenes/recomendado6.jpg',
    description: 'Descripción del producto 6...',
  },
  {
    id: 7,
    name: 'ANDAMIOS TUBULARES',
    image: 'imagenes/recomendado7.jpg',
    description: 'Descripción del producto 7...',
  },
  {
    id: 8,
    name: 'MOTONIVELADORA CATERPILLAR',
    image: 'imagenes/recomendado8.jpg',
    description: 'Descripción del producto 8...',
  },
  {
    id: 9,
    name: 'VOLQUETA INTERNATIONAL',
    image: 'imagenes/recomendado9.jpg',
    description: 'Descripción del producto 9...',
  },
  {
    id: 10,
    name: 'EXCAVADORA KOMATSU',
    image: 'imagenes/recomendado10.jpg',
    description: 'Descripción del producto 10...',
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
              <div class="recoment-card">
                  <img class="img" src=${prod.image} alt=${prod.name} />
                  <h3>${prod.name}</h3>
                  <div class="btn-ver">
                    <h2>ver mas</h2>
                    <a href="./detalle_producto.html?id=${prod.id}">
                        <i class="fa-solid fa-circle-plus"></i>
                    </a>
                  </div>
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
});
