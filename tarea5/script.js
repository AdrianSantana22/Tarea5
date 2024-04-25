const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const date = document.getElementById('date').value;
  const cedula = document.getElementById('cedula').value;
  const correo = document.getElementById('correo').value;
  const password=document.getElementById('password').value;
  const telefono = document.getElementById('telefono').value;
  const direccion = document.getElementById('direccion').value;
  alert('Los datos del cliente han sido registrados correctamente.');
});
