document.querySelector('.logo-section a').addEventListener('click', function () {
    window.location.href = 'index.html';
});

const productosConstruccionPesada = [];

const cargarProductos = async () => {
    try {
        const apiData = await fetch('http://localhost:8080/productos');
        const apiDataJson = await apiData.json();
        console.log(apiDataJson);

        apiDataJson.forEach(producto => {
            productosConstruccionPesada.push(producto);
        });
    } catch (error) {
        console.error('Error fetching data from API:', error);
    }
}

cargarProductos();


document.addEventListener("DOMContentLoaded", function () {
    function renderizarRecomendaciones() {
        const cardsRecomendaciones = document.querySelector('#recomendaciones');
        console.log(cardsRecomendaciones);
        // Limpiar el contenido existente en caso de que se estén mostrando productos antiguos
        cardsRecomendaciones.innerHTML = '';
        for (let i = 0; i < Math.min(productosConstruccionPesada.length, 10); i++) {
            const prod = productosConstruccionPesada[i];
            console.log(prod);
            cardsRecomendaciones.innerHTML += `
                <div class="recoment-card">
                    <div class="image-container">
                        <img src="${prod.urlImagen}" alt="${prod.nombre}">
                    </div>
                    <h3>${prod.nombre}</h3>
                    <div class="btn-ver">
                        <h2>ver mas</h2>
                        <a href="./detalle_producto.html?id=${prod.id}">
                        <i class="fa-solid fa-circle-plus"></i>
                        </a>
                    </div>
                </div>
            `;
        }
    }
    renderizarRecomendaciones();
});

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const form = urlParams.get('form');
    const userSection = document.querySelector('.user-info');
    const btnSection = document.querySelector('.btn-section');
    const token = localStorage.getItem('token');
    const adminSection = document.querySelector('admin-section');

    if (form === 'pass') {
        alert("Para acceder debes de iniciar sesion")
        window.location.replace('auth.html');
    } else if (token) {
        userSection.style.display = 'flex';
        btnSection.style.display = 'none';
        adminSection.style.display = 'flex';
    }

    const logoutBtn = document.getElementById('logout');

    logoutBtn.addEventListener('click', function (event) {
        event.preventDefault();
        sessionStorage.clear();
        localStorage.clear();
        alert("Has cerrado sesión correctamente");
        window.location.href = "index.html";
    });
});

// Carousel
window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});












