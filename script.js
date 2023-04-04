// Validación de formulario de RSVP
const form = document.getElementById(‘rsvp-form’);
form.addEventListener(‘submit’, function(event) {
event.preventDefault();
const nombre = document.getElementById(‘nombre’).value;
const correo = document.getElementById(‘correo’).value;
const asistencia = document.getElementById(‘asistencia’).value;
if (nombre.trim() === ‘’ || correo.trim() === ‘’ || asistencia === ‘’) {
alert(‘Por favor completa todos los campos.’);
} else {
alert(‘Gracias por confirmar tu asistencia.’);
// Aquí se podría agregar código para enviar un correo electrónico o mensaje de WhatsApp a los novios.
}
});