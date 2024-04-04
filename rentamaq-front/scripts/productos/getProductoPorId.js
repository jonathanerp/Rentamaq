import { cargarDatosUsuario } from '../usuarios/getUserData.js';

window.addEventListener('load', function () {
  cargarProductos();
  var user;

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
  var rangosInhabilitados = [];

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

        // Agregar nombre y descripción del producto al pop-up

        document.getElementById('nombre-producto').innerText = prod.nombre;
        // document.getElementById('descripcion-producto').innerText =
        //   prod.descripcion;
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

  cargarCalendario();

  async function cargarCalendario() {
    try {
      const res = await fetch(
        `http://localhost:8080/reservaciones/producto/${prodId}`
      );
      const calendario = await res.json();
      // console.log(calendario);
      renderizarCalendario(calendario);
    } catch (error) {
      console.error('Error fetching data from API:', error);
    }
  }

  function renderizarCalendario(calendario) {
    calendario.forEach((cal) => {
      // console.log('Datos seleccionados: ' + cal.inicioReservacion);
      rangosInhabilitados.push({
        inicio: cal.inicioReservacion,
        fin: cal.finReservacion,
      });
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

  $(function () {
    $('input[name="daterange"]').daterangepicker(
      {
        locale: {
          format: 'MM/DD/YYYY',
          separator: ' - ',
          applyLabel: 'Apply',
          cancelLabel: 'Cancel',
          fromLabel: 'From',
          toLabel: 'To',
          customRangeLabel: 'Custom',
          weekLabel: 'W',
          daysOfWeek: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
          monthNames: [
            'Enero',
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Octubre',
            'Noviembre',
            'Diciembre',
          ],
          firstDay: 1,
        },
        opens: 'center',
        isInvalidDate: function (date) {
          for (var i = 0; i < rangosInhabilitados.length; i++) {
            var rango = rangosInhabilitados[i];
            if (date.isBetween(rango.inicio, rango.fin, null, '[]')) {
              return true;
            }
          }
          return false;
        },
      },
      function (start, end, label) {
        console.log(
          'Datos seleccionados: ' +
            start.format('YYYY-MM-DD') +
            ' to ' +
            end.format('YYYY-MM-DD')
        );
        mostrarPopUp(start, end);
      }
    );

    async function mostrarPopUp(fechaInicio, fechaFin) {
      document.getElementById('popup').style.display = 'block';
      document.getElementById('fecha-inicio').innerText =
        fechaInicio.format('YYYY-MM-DD');
      document.getElementById('fecha-fin').innerText =
        fechaFin.format('YYYY-MM-DD');

      try {
        user = await cargarDatosUsuario();
        // Renderizar los datos del usuario en el popup
        document.getElementById('fname').value = user.name;
        document.getElementById('lname').value = user.lastname;
        document.getElementById('email').value = user.email;
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    // Obtener el elemento de cierre (la "X")
    var closeBtn = document.querySelector('.close');

    // Agregar un evento de clic al elemento de cierre
    closeBtn.addEventListener('click', function () {
      // Ocultar el pop-up al hacer clic en la "X"
      document.getElementById('popup').style.display = 'none';
    });
  });
});
