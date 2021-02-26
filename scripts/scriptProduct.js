$(document).ready(function () {
    acumulador = JSON.parse(localStorage.getItem('Carrito'));
    posicion=JSON.parse(localStorage.getItem('Position'));
    document.getElementById("ShowProduct").innerHTML = `
                <img src="${acumulador[posicion]}" alt=":)" width="600px" height="500px">
            `;
})