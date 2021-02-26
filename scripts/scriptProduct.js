$(document).ready(function () {
    acumulador = JSON.parse(localStorage.getItem('Carrito'));
    posicion=JSON.parse(localStorage.getItem('Position'));
    document.getElementById("ShowProduct").innerHTML = `
        <div class="col-8 px-0">
            <div class="row mx-0">
                <img src="${acumulador[posicion]}" alt=":)" width="100%" height="100%">
            </div>
        </div>`;
})