window.addEventListener('load', function () {
  document
    .querySelector('.logo-section a')
    .addEventListener('click', function () {
      window.location.href = 'index.html';
    });

  cargarProductos();
  cargarCategorias();
  cargarDatosUsuario();

  async function cargarProductos() {
    try {
      const res = await fetch('http://localhost:8080/productos');
      const productos = await res.json();

      console.log('aca', productos);

      renderizarProductos(productos);

      //   apiDataJson.forEach((producto) => {
      //     productosConstruccionPesada.push(producto);
      //   });
    } catch (error) {
      console.error('Error fetching data from API:', error);
    }
  }
  async function cargarCategorias() {
    try {
      const res = await fetch('http://localhost:8080/categorias');
      const categorias = await res.json();

      console.log('aca', categorias);

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
              href="/rentamaq-landing/categoria_productos.html?id=${categoria.id}"
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
  function renderizarProductos(productos) {
    const cardsRecomendaciones = document.querySelector('#recomendaciones');
    console.log(cardsRecomendaciones);
    // Limpiar el contenido existente en caso de que se estén mostrando productos antiguos
    cardsRecomendaciones.innerHTML = '';

    productos.forEach((producto) => {
      cardsRecomendaciones.innerHTML += `
          <div class="recoment-card">
              <div class="image-container">
                  <img src="${producto.urlImagen}" alt="${producto.nombre}">
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

  async function cargarDatosUsuario() {
    try {
      const token = localStorage.getItem('token');
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const userId = decodedToken.userId;
      const url = `http://localhost:8080/user/${userId}`;
      const response = await fetch(url);

      if (response.ok) {
        const userData = await response.json();
        console.log('Información del usuario:', userData);

        const initials = `${userData.name
          .charAt(0)
          .toUpperCase()}${userData.lastname.charAt(0).toUpperCase()}`;
        console.log('Iniciales:', initials);

        mostrarIniciales(initials);
        agregarEventoTarjeta(userData);
      } else {
        throw new Error('Error al obtener la información del usuario');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  function mostrarIniciales(initials) {
    const initialsElement = document.querySelector('.iniciales');
    initialsElement.textContent = initials;
  }

  function agregarEventoTarjeta(userData) {
    const initialsElement = document.querySelector('.iniciales');
    initialsElement.addEventListener('click', function () {
      const card = document.createElement('div');
      card.classList.add('user-card');

      const name = document.createElement('p');
      name.textContent = 'Nombre: ' + userData.name.toUpperCase();

      const lastname = document.createElement('p');
      lastname.textContent = 'Apellido: ' + userData.lastname.toUpperCase();

      const email = document.createElement('p');
      email.textContent = 'Email: ' + userData.email;

      card.appendChild(name);
      card.appendChild(lastname);
      card.appendChild(email);

      const infoUser = document.querySelector('.infoUser');
      infoUser.innerHTML = '';
      infoUser.appendChild(card);
    });
  }

  new Glider(document.querySelector('.carousel__lista'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: '.carousel__indicadores',
    arrows: {
      prev: '.carousel__anterior',
      next: '.carousel__siguiente',
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 450,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        // screens greater than >= 1024px
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const form = urlParams.get('form');
  const userSection = document.querySelector('.user-info');
  const btnSection = document.querySelector('.btn-section');
  const token = localStorage.getItem('token');
  const adminSection = document.querySelector('.admin-section');

  if (form === 'pass') {
    alert('Para acceder debes de iniciar sesion');
    window.location.replace('auth.html');
  } else if (token) {
    userSection.style.display = 'flex';
    btnSection.style.display = 'none';
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    console.log(decodedToken);
    console.log(decodedToken.roles[0]);
    if (decodedToken.roles[0] === 'ROLE_ADMIN') {
      adminSection.style.display = 'flex';
    }
  }
});

const logoutBtn = document.getElementById('logout');

logoutBtn.addEventListener('click', function (event) {
  event.preventDefault();
  sessionStorage.clear();
  localStorage.clear();
  alert('Has cerrado sesión correctamente');
  window.location.href = 'index.html';
});
