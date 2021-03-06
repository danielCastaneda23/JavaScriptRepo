acumulador=[];
textos=[];
posicion=0;
acumuladorDePrecio=[];
if (localStorage.getItem('Carrito')!=null){
    acumulador = JSON.parse(localStorage.getItem('Carrito'));
    textos = JSON.parse(localStorage.getItem('Texto'));
    posicion = JSON.parse(localStorage.getItem('Position'));
    acumuladorDePrecio=JSON.parse(localStorage.getItem('Price'));

}
let PrecioTotal=0;
aux = `<div class="col-12 text-right pr-5 mr-5 h5"> Numero De Elementos En Carrito: ${(acumulador.length)} </div>`;
for(let j=0;j<acumulador.length;j++){
    PrecioTotal+=Number(acumuladorDePrecio[j]);
    console.log(PrecioTotal);
}
for (let i = 0; i < acumulador.length; i++) {
    aux += `
                    <div class="col-1 px-0">
                        <div class="row mx-0 ">
                            <img src="${acumulador[i]}" alt=":)" width="122px" height="120px" class="px-1"style="border-radius: 10%; " >
                        </div>
                        <div class="row mx-0 pl-2">
                        <button type="button" class="btn btn-link py-0 my-0 px-0 text-dark" onclick="EliminarDelCarrito(${i})">Eliminar</button>
                        <a href="producto.html"><button type="button" class="btn btn-link py-0 my-0 px-2 text-dark" onclick="ShowProducto(${i})">Ver</button></a>
                        </div>
                    </div>
                    `
}
document.getElementById("Total2").innerHTML = aux;
document.getElementById("TotalElementos").innerHTML = `(${acumulador.length})`;
document.getElementById("ValorAPagar").innerHTML=`Valor A Pagar: $${PrecioTotal}`;
PrecioTotal=0;

if (localStorage.getItem('Imagen') != null) {
    Titulo = JSON.parse(localStorage.getItem('Texto2'));
    Imagen = JSON.parse(localStorage.getItem('Imagen'));
    PrecioArticulo = JSON.parse(localStorage.getItem('PriceElement'));
    document.getElementsByClassName("ShowProduct")[0].innerHTML = `
            <div class="col-7 px-0 " style="margin-top: 8%;">
                <img src="${Imagen}" alt=":)" width="600px" height="500px" style="border:0px solid; border-radius: 20%;">
            </div>
            <div class="col-5 px-0" style="margin-top: 8%;">
                <div class="row mx-0 mt-5 pt-5 justify-content-center">
                    <div class="card w-100">
                        <div class="card-body">
                            <h3 class="card-title">${Titulo}</h3>
                            <p class="h5 card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consequuntur cupiditate odio quae? Deserunt facere quae explicabo ratione similique repudiandae cupiditate totam laudantium quam aspernatur. Excepturi obcaecati praesentium facilis. Nam.
                            </p>
                            <button type="button" class="btn btn-link mt-2 mx-3 " onclick="AgregarCarro('${Imagen}','${Titulo}',${PrecioArticulo})" >Agregar al carrito</button>
                            <a href="finalizarcompra.html"><button type="button" class="btn btn-link mt-2 mx-3" >Finalizar Compra</button></a>
                        </div>
                    </div>
                </div>
            </div>
                `;
}
else {
    document.getElementsByClassName("ShowProduct")[0].innerHTML = `
        <div class="col-7 px-0 " style="margin-top: 8%;">
            <img src="${acumulador[posicion]}" alt=":)" width="600px" height="500px" style="border:0px solid; border-radius: 20%;">
        </div>
        <div class="col-5 px-0" style="margin-top: 8%;">
            <div class="row mx-0 mt-5 pt-5 justify-content-center">
                <div class="card w-100">
                    <div class="card-body">
                        <h3 class="card-title">${textos[posicion]}</h3>
                        <p class="h5 card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consequuntur cupiditate odio quae? Deserunt facere quae explicabo ratione similique repudiandae cupiditate totam laudantium quam aspernatur. Excepturi obcaecati praesentium facilis. Nam.
                        </p>
                        <button type="button" class="btn btn-link mt-2 mx-3 " onclick="AgregarCarro('${acumulador[posicion]}','${textos[posicion]}',${acumuladorDePrecio[posicion]})" >Agregar al carrito</button>
                        <a href="finalizarcompra.html"><button type="button" class="btn btn-link mt-2 mx-3" >Finalizar Compra</button></a>
                    </div>
                </div>
            </div>
        </div>
            `;
}


$("#MostrarCarritoTwo").hover(function () {
    $(".Vertical-Transition").css("height", "180px")
}, function () {
    $(".Vertical-Transition").css("height", "32px")
});
window.onbeforeunload = function (e) {
    localStorage.removeItem('Texto2');
    localStorage.removeItem('Imagen');
    localStorage.removeItem('PriceElement');
};

function AgregarCarro(ImagenParaCarro,AcumuladorTexto,PrecioArticulo){
    let aux=``;
    let PrecioTotal=0;
    acumulador.push(ImagenParaCarro);
    textos.push(AcumuladorTexto);
    acumuladorDePrecio.push(PrecioArticulo);
    if(acumulador.length<=12){
        aux=`<div class="col-12 text-right pr-5 mr-5 h5"> Numero De Elementos En Carrito: ${(acumulador.length)} </div>`
        for(let j=0;j<acumulador.length;j++){
            PrecioTotal+=Number(acumuladorDePrecio[j]);
            console.log(PrecioTotal);
        }
        for(let i=0;i<acumulador.length;i++){
        aux+=`
        <div class="col-1 px-0">
            <div class="row mx-0">
                <img src="${acumulador[i]}" alt=":)" width="122px" height="120px" class="px-1"style="border-radius: 10%; " >
            </div>
            <div class="row mx-0 pl-2">
            <button type="button" class="btn btn-link py-0 my-0 px-0 text-dark" onclick="EliminarDelCarrito(${i})">Eliminar</button>
            <a href="producto.html"><button type="button" class="btn btn-link py-0 my-0 px-2 text-dark" onclick="ShowProducto(${i})" >Ver</button></a>
            </div>
        </div>
        `
        }
        document.getElementById("Total2").innerHTML=aux;
        document.getElementById("TotalElementos").innerHTML=`(${acumulador.length})`;
        document.getElementById("ValorAPagar").innerHTML=`Valor A Pagar: $${PrecioTotal}`;
        localStorage.setItem('Carrito',JSON.stringify(acumulador));
        localStorage.setItem('Texto',JSON.stringify(textos));
        localStorage.setItem('Price',JSON.stringify(acumuladorDePrecio));
    }
    else{
        localStorage.removeItem('Carrito')
    }
    console.log(acumulador);
    PrecioTotal=0;
}
function EliminarDelCarrito(posicion){
    let aux=` `;
    let PrecioTotal=0;
    acumulador.splice(posicion,1);
    textos.splice(posicion,1);
    acumuladorDePrecio.splice(posicion,1);
    if(acumulador.length<=12){
        aux=`<div class="col-12 text-right pr-5 mr-5 h5"> Numero De Elementos En Carrito: ${(acumulador.length)} </div>`
        for(let j=0;j<acumulador.length;j++){
            PrecioTotal+=Number(acumuladorDePrecio[j]);
            console.log(PrecioTotal);
        }
        for(let i=0;i<acumulador.length;i++){
        aux+=`
        <div class="col-1 px-0">
            <div class="row mx-0">
                <img src="${acumulador[i]}" alt=":)" width="122px" height="120px" class="px-1"style="border-radius: 10%; " >
            </div>
            <div class="row mx-0 pl-2">
            <button type="button" class="btn btn-link py-0 my-0 px-0 text-dark" onclick="EliminarDelCarrito(${i})">Eliminar</button>
            <a href="producto.html"><button type="button" class="btn btn-link py-0 my-0 px-2 text-dark" onclick="ShowProducto(${i})" >Ver</button></a>
            </div>
        </div>
        `
        }
        document.getElementById("Total2").innerHTML=aux;
        document.getElementById("TotalElementos").innerHTML=`(${acumulador.length})`;
        document.getElementById("ValorAPagar").innerHTML=`Valor A Pagar: $${PrecioTotal}`;
        localStorage.setItem('Carrito',JSON.stringify(acumulador))
        localStorage.setItem('Texto',JSON.stringify(textos));
        localStorage.setItem('Price',JSON.stringify(acumuladorDePrecio));
    }
    else{
        localStorage.removeItem('Carrito')
    }
    console.log(acumulador)
    PrecioTotal=0;
}
function ShowProducto(posicion){
    localStorage.setItem('Position',JSON.stringify(posicion));
    localStorage.setItem('Texto',JSON.stringify(textos));
}
