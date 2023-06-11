const valorTicket = 200;

let descuentoEstudiante = 0.80;
let descuentoTrainee = 0.50;
let descuentoJunior = 0.15;

const cantidad = document.querySelector('#NumCantidad');
const categoria = document.querySelector('#categoriaSelect');
const botonBorrar = document.querySelector('#borrar');
const botonResumen = document.querySelectorAll("#PRECIO");
const parrafo = document.querySelector('#parrafo');

function totalPagar() {
  let totalValor = parseInt(cantidad.value) * valorTicket;

  if (categoria.value == 1) {
    totalValor *= descuentoEstudiante;
  } else if (categoria.value == 2) {
    totalValor *= descuentoTrainee;
  } else if (categoria.value == 3) {
    totalValor *= descuentoJunior;
  } else if (categoria.value == 0) {
    totalValor *= 1; 
  }

  parrafo.innerHTML = `Total a Pagar: $${totalValor}`;
}

botonResumen.addEventListener('click', totalPagar);
// Error en el botonResumen.addEventListener que sale en la consola = Uncaught TypeError: Cannot read properties of null (reading 'addEventListener' at Script.js:29:14

botonBorrar.addEventListener('click', () => {
  parrafo.innerHTML = 'Total a Pagar:';
  cantidad.value = 0;
});