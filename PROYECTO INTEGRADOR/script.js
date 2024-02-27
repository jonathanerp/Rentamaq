document.querySelector('.logo-section a').addEventListener('click', function() {
    window.location.href = 'index.html';
});

// Agrega un evento al formulario de búsqueda
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();// Evita que el formulario se envíe por defecto (puede personalizarse según tus necesidades)

// Obtén el valor del campo de búsqueda
const searchQuery = document.getElementById('searchInput').value;


// Puedes redirigir a una página de resultados de búsqueda o realizar otras acciones según el valor de searchQuery
    // Por ejemplo:
//window.location.href = 'resultados.html?q=' + encodeURIComponent(searchQuery);

});






    
