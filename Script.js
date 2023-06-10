const valorTicket = 200;

let descuentoEstudiante = 0.80;
let descuentoTrainee = 0.50;
let descuentoJunior= 0.15;

const cantidad = document.querySelector('#NumCantidad');
const categoria = document.querySelector('#categoriaSelect');
const botonborrar = document.querySelector('#borrar');
const botonresumen = document.querySelector('#resumen');
const parrafo = document.querySelector('#parrafo');

function totalPagar() {
    let totalValor = parseInt(cantidad.value) * valorTicket;
    
    if (categoria.value == 1) {
        totalValor = totalValor - (totalValor * descuentoEstudiante);   
    }
    else if (categoria.value == 2) {
        totalValor = totalValor - (totalValor * descuentoTrainee);
    }
    else if (categoria.value == 3) {
        totalValor = totalValor - (totalValor * descuentoJunior);
    }
    else if (categoria.value == 0) {
        totalValor = totalValor
    }
    
    parrafo.innerHTML = `Total a Pagar: $ ${totalValor}`;

}

botonresumen.addEventListener('click', totalPagar);

botonborrar.addEventListener('click', () => {
    parrafo.innerHTML = 'Total a Pagar: '
    cantidad.value = 0;
});