window.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const suggestionsDiv = document.createElement('div');
  suggestionsDiv.classList.add('suggestions');
  searchInput.parentNode.appendChild(suggestionsDiv); // Agregar sugerencias como hijo del padre del campo de búsqueda

  searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.trim();
    if (searchTerm.length > 0) {
      fetch(`http://localhost:8080/productos/producto/${searchTerm}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Error al obtener los datos del servidor');
          }
          return response.json();
        })
        .then(data => {
          console.log('Respuesta del servidor:', data);
          suggestionsDiv.innerHTML = '';
          data.forEach(producto => {
            const suggestion = document.createElement('div');
            suggestion.textContent = producto.nombre;
            suggestion.classList.add('suggestion-item');
            suggestion.addEventListener('click', function () {
              searchInput.value = producto.nombre;
              suggestionsDiv.innerHTML = '';
            });
            suggestionsDiv.appendChild(suggestion);
          });
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } else {
      suggestionsDiv.innerHTML = '';
    }
  });

  document.addEventListener('click', function (event) {
    if (!event.target.closest('.searchForm')) {
      suggestionsDiv.innerHTML = '';
    }
  });
});