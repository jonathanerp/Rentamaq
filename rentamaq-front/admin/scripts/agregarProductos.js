window.addEventListener('load', function () {
  cargarCategorias();

  async function cargarCategorias() {
    try {
      const apiData = await fetch('http://localhost:8080/categorias');
      const apiDataJson = await apiData.json();
      console.log(apiDataJson);

      renderizarCategorias(apiDataJson);
    } catch (error) {
      console.error('Error fetching data from API:', error);
    }
  }

  function renderizarCategorias(categorias) {
    const categoriashtml = document.querySelector('#categoriaId');
    categoriashtml.innerHTML = '';
    categorias.forEach(function (cat) {
      categoriashtml.innerHTML += `
                <option value="${cat.id}">${cat.titulo}</option>
            `;
    });
  }

  document
    .getElementById('fileInput')
    .addEventListener('change', handleFileSelect);

  const nombresArchivos = [];
  function handleFileSelect(event) {
    const files = event.target.files;
    const imageContainer = document.getElementById('imageContainer');

    // Mostrar las imágenes seleccionadas
    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      nombresArchivos.push(file.name);

      const reader = new FileReader();

      reader.onload = function (e) {
        const img = document.createElement('img');
        img.classList.add('img-preview');
        img.src = e.target.result;
        imageContainer.appendChild(img);
      };

      reader.readAsDataURL(file);
    }
    document.getElementById('fileInput').value = '';
  }

  const formulario = document.getElementById('formularioProducto');

  formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    const imageContainer = document.getElementById('imageContainer');
    const images = imageContainer.querySelectorAll('img');

    // Construir el objeto FormData para enviar los datos del formulario
    const formData = new FormData(formulario);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }

    formData.delete('imagenes');
    images.forEach((image, index) => {
      const file = image.src.split(',')[1]; // Obtener solo el contenido de la imagen (sin la metadata)
      const fileName = `${nombresArchivos[index]}`; // Nombrar la imagen de manera única
      if (fileName) {
        formData.append(
          'imagenes',
          dataURItoBlob(file, 'image/jpeg'),
          fileName
        );
      }
    });

    document.getElementById('error-nombre').textContent = '';
    document.getElementById('error-descripcion').textContent = '';
    // Realizar la solicitud AJAX POST al endpoint del controlador
    fetch('http://localhost:8080/productos/guardar', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then(function (err) {
            throw err;
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        alert('Producto guardado exitosamente');
      })
      .catch((error) => {
        console.log(error);
        if (error.nombre) {
          document.getElementById('error-nombre').textContent = error.nombre;
        }
        if (error.descripcion) {
          document.getElementById('error-descripcion').textContent =
            error.descripcion;
        }
      });
  });

  // Función auxiliar para convertir una cadena de datos URI a Blob
  function dataURItoBlob(dataURI, type) {
    const byteString = atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      uint8Array[i] = byteString.charCodeAt(i);
    }
    return new Blob([arrayBuffer], { type: type });
  }
});
