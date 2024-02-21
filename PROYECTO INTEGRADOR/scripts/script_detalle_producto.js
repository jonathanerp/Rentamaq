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
  // Función para cargar los datos del producto en la página
  function cargarDetalleProducto() {
    const divDetalleProducto = document.querySelector('#recomendaciones');
    const urlSearchParams = new URLSearchParams(window.location.search);
    console.log(divDetalleProducto);
    // Obtener el valor de un parámetro específico
    const prodId = urlSearchParams.get('id');

    divDetalleProducto.innerHTML = '';
    productosConstruccionPesada.forEach((prod) => {
      console.log(prod.id);
      console.log(prodId);
      if (prod.id.toString() === prodId) {
        divDetalleProducto.innerHTML += `
              <div class="card">
                  <h3 style="text-align: center;">${prod.nombre}</h3>
                  <img src=${prod.imagen} alt=${prod.nombre}>
                  <div class="card-content">
                      <p>${prod.descripcion}</p>
                  </div>
              </div>
          `;
      }
    });
  }

  // Llamar a la función para cargar los datos del producto al cargar la página
  cargarDetalleProducto();
});
