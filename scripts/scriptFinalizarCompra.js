acumulador = [];
textos = [];
posicion = 0;
acumuladorDePrecio = [];
let PrecioTotal = 0;
let aux2 = ``;
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
document.getElementById("TotalElementos").innerHTML = `(${acumulador.length})`;
document.getElementById("ValorAPagar").innerHTML = `Valor A Pagar: $${PrecioTotal}`;

aux2+=`<div class="col-4 border-top border-dark"></div>
<div class="col-4 border-top border-dark"></div>
<div class="col-4 border-top border-dark"></div>`
for (let i = 0; i < acumulador.length; i++) {
    aux2 += `
                <div class="col-4 px-0 py-2"><img src="${acumulador[i]}" alt=":)" width="122px" height="120px" class="px-1"style="border-radius: 10%; " ></div>
                <div class="col-4 px-0 py-2">${textos[i]}</div>
                <div class="col-4 px-0 py-2">$ ${acumuladorDePrecio[i]}</div>
`
}
aux2+=`<div class="col-4 px-0 py-2 border-top border-dark h5">PAGAR</div>
<div class="col-4 px-0 py-2 border-top border-dark h5">Total: </div>
<div class="col-4 px-0 py-2 border-top border-dark h5">$ ${PrecioTotal}</div>`
document.getElementById('ShowProducts').innerHTML=aux2;
PrecioTotal = 0;

