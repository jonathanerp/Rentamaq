const productosConstruccionPesada = [];

const cargarProductos = async() =>{

  try{
    const apiData = await fetch('http://localhost:8080/productos');
    const apiDataJson = await apiData.json();
    console.log(apiDataJson);
    
    apiDataJson.forEach(producto => {
      productosConstruccionPesada.push(producto);
    });
  }catch (error) {
    console.error('Error fetching data from API:', error);
  }
}

cargarProductos();

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
              <img src=${prod.urlImagen} alt=${prod.nombre} />
          </div>
          <div class="div-texto">
              <h1>${prod.nombre}</h1>
              <div>
                  <h3>Descripción General</h3>
                  <p>
                  ${prod.descripcion}
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
  