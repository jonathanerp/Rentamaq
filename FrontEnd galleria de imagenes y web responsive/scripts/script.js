const productosConstruccionPesada = [
  {
    id: 1,
    name: 'EXCAVADORA KOMATSU',
    image: 'img/recomendado1.jpg',
    description: 'Descripción del producto 1...',
  },
  {
    id: 2,
    name: 'BULLDOZER CATERPILLAR',
    image: 'img/recomendado2.jpg',
    description: 'Descripción del producto 2...',
  },
  {
    id: 3,
    name: 'RETROEXCAVADORA CATERPILLAR',
    image: 'img/recomendado3.jpg',
    description: 'Descripción del producto 3...',
  },
  {
    id: 4,
    name: 'APLANADORA CATERPILLAR',
    image: 'img/recomendado4.jpg',
    description: 'Descripción del producto 4...',
  },
  {
    id: 5,
    name: 'MINICARGADOR BOBCAT',
    image: 'img/recomendado5.jpg',
    description: 'Descripción del producto 5...',
  },
  {
    id: 6,
    name: 'MONTACARGA MITSUBISHI',
    image: 'img/recomendado6.jpg',
    description: 'Descripción del producto 6...',
  },
  {
    id: 7,
    name: 'ANDAMIOS TUBULARES',
    image: 'img/recomendado7.jpg',
    description: 'Descripción del producto 7...',
  },
  {
    id: 8,
    name: 'MOTONIVELADORA CATERPILLAR',
    image: 'img/recomendado8.jpg',
    description: 'Descripción del producto 8...',
  },
  {
    id: 9,
    name: 'VOLQUETA INTERNATIONAL',
    image: 'img/recomendado9.jpg',
    description: 'Descripción del producto 9...',
  },
  {
    id: 10,
    name: 'EXCAVADORA KOMATSU',
    image: 'img/recomendado10.jpg',
    description: 'Descripción del producto 10...',
  },
];

window.addEventListener('load', function () {
  function renderizarRecomendaciones() {
    const cardsRecomendaciones = document.querySelector('#recomendaciones');

    // Limpiar el contenido existente en caso de que se estén mostrando productos antiguos
    cardsRecomendaciones.innerHTML = '';

    productosConstruccionPesada.forEach((prod) => {
      const card = document.createElement('div');
      card.classList.add('recoment-card');

      const image = document.createElement('img');
      image.src = prod.image;
      image.alt = prod.name;
      image.classList.add('img');
      card.appendChild(image);

      const title = document.createElement('h3');
      title.textContent = prod.name;
      card.appendChild(title);

      const btnContainer = document.createElement('div');
      btnContainer.classList.add('btn-ver');
      const btnText = document.createElement('span');
      btnText.textContent = 'Ver más';
      const btnIcon = document.createElement('i');
      // btnIcon.classList.add('fa-solid', 'fa-circle-plus');
      btnContainer.appendChild(btnText);
      btnContainer.appendChild(btnIcon);

      const link = document.createElement('a');
      link.classList.add('btn-link');
      link.href = `./detalle_producto.html?id=${prod.id}`;
      link.appendChild(btnContainer);
      card.appendChild(link);

      cardsRecomendaciones.appendChild(card);
    });
  }

  renderizarRecomendaciones();

  document.querySelector('.logo-section a').addEventListener('click', function () {
    window.location.href = 'index.html';
  });

  // Agrega un evento al formulario de búsqueda
  document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto (puede personalizarse según tus necesidades)

    // Obtén el valor del campo de búsqueda
    const searchQuery = document.getElementById('searchInput').value;

    // Puedes redirigir a una página de resultados de búsqueda o realizar otras acciones según el valor de searchQuery
    // Por ejemplo:
    //window.location.href = 'resultados.html?q=' + encodeURIComponent(searchQuery);
  });
});