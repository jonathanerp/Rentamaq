// function checkUserLoggedIn() {
//     // Seleccionar elementos del DOM
//     const userSection = document.querySelector('.user-info');
//     const token = localStorage.getItem('token');
//     let userLoggedIn = false;

//     // Verificar si hay un token de autenticación
//     if (token) {
//         // Si hay un token, el usuario está autenticado, entonces se establece userLoggedIn en true
//         userLoggedIn = true;
//         // Mostrar la sección de información del usuario
//         userSection.style.display = 'flex';
//     }

//     return userLoggedIn;
// }


// document.addEventListener('DOMContentLoaded', function () {
//     const reservarBtn = document.getElementById('btnFecha');
//     const popupReserva = document.getElementById('popupReserva');
//     const detallesReserva = document.getElementById('detallesReserva');
//     const popupButtons = document.querySelector('.popup-buttons');
//     const confirmarReservaBtn = document.getElementById('confirmarReservaBtn');
//     const popupTitle = document.getElementById('popupTitle');
//     const selectedDates = document.getElementById('selectedDates');
//     const calendarioInput = document.getElementById('calendarioId');

//     // Inicializar el calendario con el plugin Daterangepicker
//     $(calendarioInput).daterangepicker();

//     // Maneja el evento click del botón de reserva
//     reservarBtn.addEventListener('click', function () {
//         // Verificar si el usuario está logeado
//         if (checkUserLoggedIn()) {
//             // Obtener las fechas seleccionadas
//             const dates = calendarioInput.value.split(' - ');
//             const fechaInicio = dates[0];
//             const fechaFin = dates[1];
//             // Verificar si se han seleccionado fechas
//             if (fechaInicio && fechaFin) {
//                 // Comprobar si las fechas son iguales al valor por defecto
//                 const defaultValue = "01/01/2023 - 01/15/2023";
//                 if (calendarioInput.value === defaultValue) {
//                     // Alertar si las fechas son iguales al valor por defecto
//                     alert('Selecciona las fechas en las que quieres reservar.');
//                 } else {
//                     // Lógica de reserva aquí
//                     detallesReserva.innerHTML = `
//                         <p>Fechas seleccionadas: ${fechaInicio} - ${fechaFin}</p>
//                         <p>Detalles adicionales de la reserva aquí...</p>
//                     `;
//                     // Mostrar el pop-up
//                     popupTitle.style.display = 'block';
//                     detallesReserva.style.display = 'block';
//                     popupButtons.style.display = 'block';
//                     popupReserva.style.display = 'block';
//                 }
//             } else {
//                 // Mostrar un mensaje de error si no se han seleccionado fechas
//                 alert('Por favor selecciona las fechas de inicio y fin para reservar el producto.');
//             }
//         } else {
//             // Redirigir al usuario a la página de inicio de sesión si no está logeado
//             window.location.href = './login.html';
//         }
//     });

//     // Función para cerrar el pop-up
//     window.cerrarPopup = function() {
//         detallesReserva.style.display = 'none';
//         popupButtons.style.display = 'none';
//         popupTitle.style.display = 'none';
//         popupReserva.style.display = 'none';
//     };

//     // Función para regresar al detalle del producto
//     window.regresarDetalleProducto = function() {
//         detallesReserva.style.display = 'none';
//         popupButtons.style.display = 'none';
//         popupTitle.style.display = 'none';
//     };

//     // Función para confirmar la reserva (sin funcionalidad por el momento)
//     confirmarReservaBtn.addEventListener('click', function() {
//         alert('¡Reserva confirmada!');
//     });
// });