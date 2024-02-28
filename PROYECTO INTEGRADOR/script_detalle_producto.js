const productosConstruccionPesada = [
  {
    id: 1,
    carrousel: [],
    name: 'EXCAVADORA KOMATSU',
    image: 'imagenes/recomendado1.jpg',
    description:
      'La Excavadora Komatsu es una máquina poderosa y versátil diseñada para trabajos de construcción de cualquier tamaño. Equipada con un motor robusto y componentes de alta calidad, esta excavadora puede manejar una variedad de tareas, desde la excavación de zanjas hasta la demolición de edificios. Su diseño ergonómico y controles intuitivos hacen que sea fácil de operar y cómoda de usar durante largas jornadas de trabajo.',
  },
  {
    id: 2,
    carrousel: [],
    name: 'BULLDOZER CATERPILLAR',
    image: 'imagenes/recomendado2.jpg',
    description:
      'El Bulldozer Caterpillar es una máquina impresionante diseñada para el trabajo duro en cualquier obra de construcción. Equipado con un motor de alta potencia y un tren de rodaje duradero, este bulldozer puede enfrentarse a terrenos difíciles y cargar y empujar grandes cantidades de tierra y escombros con facilidad. Su cabina espaciosa y cómoda ofrece al operador una excelente visibilidad y un entorno de trabajo seguro.',
  },
  {
    id: 3,
    carrousel: [],
    name: 'RETROEXCAVADORA CATERPILLAR',
    image: 'imagenes/recomendado3.jpg',
    description:
      'La Retroexcavadora Caterpillar es una máquina versátil y eficiente diseñada para una variedad de tareas de excavación y carga en la construcción. Equipada con una cabina cómoda y controles intuitivos, esta retroexcavadora ofrece una excelente visibilidad y comodidad para el operador. Con su potente motor y componentes duraderos, esta máquina puede manejar una variedad de terrenos y condiciones de trabajo.',
  },
  {
    id: 4,
    carrousel: [],
    name: 'APLANADORA CATERPILLAR',
    image: 'imagenes/recomendado4.jpg',
    description:
      'La Aplanadora Caterpillar es una máquina poderosa y versátil diseñada para niveles precisos y un acabado suave en una variedad de superficies. Equipada con un motor potente y componentes duraderos, esta aplanadora puede manejar terrenos difíciles y proporcionar un rendimiento constante y confiable. Su diseño ergonómico y controles intuitivos hacen que sea fácil de operar y cómoda de usar durante largas jornadas de trabajo.',
  },
  {
    id: 5,
    carrousel: [],
    name: 'MINICARGADOR BOBCAT',
    image: 'imagenes/recomendado5.jpg',
    description:
      'El Minicargador Bobcat es una máquina compacta y versátil diseñada para trabajos en espacios reducidos. Equipado con una variedad de implementos y accesorios, este minicargador puede manejar una amplia gama de tareas, desde la carga y descarga de materiales hasta la nivelación de terrenos. Su diseño compacto y maniobrable, combinado con una cabina cómoda y controles intuitivos, lo convierte en una opción ideal para trabajos en áreas urbanas y espacios confinados.',
  },
  {
    id: 6,
    carrousel: [],
    name: 'MONTACARGA MITSUBISHI',
    image: 'imagenes/recomendado6.jpg',
    description:
      'El Montacarga Mitsubishi es una máquina robusta y confiable diseñada para el movimiento eficiente de materiales en almacenes y depósitos. Equipado con un motor potente y componentes duraderos, este montacarga puede manejar cargas pesadas y proporcionar un rendimiento constante y confiable. Su diseño ergonómico y controles intuitivos hacen que sea fácil de operar y cómodo de usar durante largas jornadas de trabajo.',
  },
  {
    id: 7,
    carrousel: [],
    name: 'ANDAMIOS TUBULARES',
    image: 'imagenes/recomendado7.jpg',
    description:
      'Los Andamios Tubulares son una solución versátil y segura para trabajos de construcción y mantenimiento en altura. Fabricados con materiales de alta calidad y un diseño duradero, estos andamios ofrecen una plataforma estable y segura para los trabajadores. Fáciles de montar y desmontar, estos andamios se adaptan a una variedad de aplicaciones y entornos de trabajo.',
  },
  {
    id: 8,
    carrousel: [],
    name: 'MOTONIVELADORA CATERPILLAR',
    image: 'imagenes/recomendado8.jpg',
    description:
      'La Motoniveladora Caterpillar es una máquina versátil y eficiente diseñada para una variedad de tareas de nivelación y acabado en la construcción. Equipada con un potente motor y componentes duraderos, esta motoniveladora puede manejar terrenos difíciles y proporcionar un rendimiento constante y confiable. Su diseño ergonómico y controles intuitivos hacen que sea fácil de operar y cómoda de usar durante largas jornadas de trabajo.',
  },
  {
    id: 9,
    carrousel: [],
    name: 'VOLQUETA INTERNATIONAL',
    image: 'imagenes/recomendado9.jpg',
    description:
      'La Volqueta International es una máquina robusta y confiable diseñada para el transporte eficiente de materiales en la construcción. Equipada con un motor potente y componentes duraderos, esta volqueta puede manejar cargas pesadas y proporcionar un rendimiento constante y confiable. Su diseño ergonómico y controles intuitivos hacen que sea fácil de operar y cómodo de usar durante largas jornadas de trabajo.',
  },
  {
    id: 10,
    carrousel: [],
    name: 'EXCAVADORA KOMATSU',
    image: 'imagenes/recomendado10.jpg',
    description:
      'La Excavadora Komatsu es una máquina poderosa y versátil diseñada para trabajos de construcción de cualquier tamaño. Equipada con un motor robusto y componentes de alta calidad, esta excavadora puede manejar una variedad de tareas, desde la excavación de zanjas hasta la demolición de edificios. Su diseño ergonómico y controles intuitivos hacen que sea fácil de operar y cómoda de usar durante largas jornadas de trabajo.',
  },
];
window.addEventListener('load', function () {
  // Función para cargar los datos del producto en la página
  function cargarDetalleProducto() {
    const divDetalleProducto = document.querySelector('#detalle-producto');
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
        <div class="div-imagen">
            <img src=${prod.image} alt=${prod.name} />
         </div>
        <div class="div-texto">
            <h1>${prod.name}</h1>
            <div>
                <h3>Descripción General</h3>
                <p>
                ${prod.description}
                </p>
            </div>
        </div>
            `;
      }
    });
  }

  // Llamar a la función para cargar los datos del producto al cargar la página
  cargarDetalleProducto();
});
