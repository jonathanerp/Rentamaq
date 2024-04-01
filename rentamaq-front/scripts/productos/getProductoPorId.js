window.addEventListener('load', function () {


  cargarProductos();

  async function cargarProductos() {
    try {
      const res = await fetch('http://localhost:8080/productos');
      const productos = await res.json();

      renderizarProductos(productos);
    } catch (error) {
      console.error('Error fetching data from API:', error);
    }
  }

  const urlSearchParams = new URLSearchParams(window.location.search);
  const prodId = urlSearchParams.get('id');

  function renderizarProductos(productos) {
    const divDetalleProducto = document.querySelector('#detalle-producto');
    const backArrow = document.querySelector('.back-arrow');

    // Limpiar el contenido existente en caso de que se estén mostrando productos antiguos
    backArrow.innerHTML = '';
    divDetalleProducto.innerHTML = '';

    let urlAnterior = document.referrer;
    backArrow.innerHTML = `
      <a href="${urlAnterior}">
        <i class="fa-solid fa-arrow-left"></i>
      </a>
    `;

    productos.forEach((prod) => {
      if (prod.id.toString() === prodId) {
        console.log(prod);
        divDetalleProducto.innerHTML += `
          <div class="div-imagen">
              <img src=${prod.imagenPrincipal} alt=${prod.nombre} />
          </div>
          <div class="div-texto">
              <h3>${prod.nombre}</h3>
              <div>
                  <h3>Descripción General</h3>
                  <p>
                  ${prod.descripcion}
                  </p>
              </div>
          </div>

          <div class="container">
      <div class="rating">
        <input type="radio" name="clr1" style="--c:#ff9933">
        <input type="radio" name="clr1" style="--c:#ff9933">
        <input type="radio" name="clr1" style="--c:#ff9933">
        <input type="radio" name="clr1" style="--c:#ff9933">
        <input type="radio" name="clr1" style="--c:#ff9933">
      </div>
    </div>
        `;
      }
    });
  }




  cargarCaracteristicas();

  async function cargarCaracteristicas() {
    try {
      const res = await fetch(
        `http://localhost:8080/caracteristicas/${prodId}`
      );
      const caracteristicas = await res.json();

      renderizarCaracteristicas(caracteristicas);
    } catch (error) {
      console.error('Error fetching data from API:', error);
    }
  }

  function renderizarCaracteristicas(caracteristicas) {
    const divCaracteristicaProducto = document.querySelector(
      '#caracteristica-producto'
    );

    divCaracteristicaProducto.innerHTML = '';
    caracteristicas.forEach((car) => {
      divCaracteristicaProducto.innerHTML += `
        <li id="caracteristica-lista">
          <img src=${car.urlImagen} alt="No disponible" class="icono"/>
          ${car.descripcion}
        </li>
      `;
    });
  }

  function renderizarEstrellas(puntuacion) {
    const estrellasHTML = [];
    const maxEstrellas = 5; // Suponiendo un máximo de 5 estrellas

    for (let i = 0; i < maxEstrellas; i++) {
      if (i < puntuacion) {
        estrellasHTML.push('<i class="fa-solid fa-star"></i>'); // Ícono de estrella llena
      } else {
        estrellasHTML.push('<i class="fa-regular fa-star"></i>'); // Ícono de estrella vacía
      }
    }

    return estrellasHTML.join(''); // Convertimos el array en una cadena de HTML
  }

});
