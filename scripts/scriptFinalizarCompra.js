acumulador = [];
textos = [];
posicion = 0;
acumuladorDePrecio = [];
let PrecioTotal=0;
if (localStorage.getItem('Carrito') != null) {
    acumulador = JSON.parse(localStorage.getItem('Carrito'));
    textos = JSON.parse(localStorage.getItem('Texto'));
    posicion = JSON.parse(localStorage.getItem('Position'));
    acumuladorDePrecio = JSON.parse(localStorage.getItem('Price'));
}
aux = `<div class="col-12 text-right pr-5 mr-5 h5"> Numero De Elementos En Carrito: ${(acumulador.length)} </div>`
for (let j = 0; j < acumulador.length; j++) {
    PrecioTotal += Number(acumuladorDePrecio[j]);
    console.log(PrecioTotal);
}


document.getElementById("TotalElementos").innerHTML=`(${acumulador.length})`;
document.getElementById("ValorAPagar").innerHTML=`Valor A Pagar: $${PrecioTotal}`;
PrecioTotal=0;