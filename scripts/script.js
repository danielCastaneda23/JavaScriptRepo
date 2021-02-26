class Tarjeta {
    constructor(NumeroImagen = [], NombreTitulo = [], NombreDescripcion = []) {
        this.Imagen = NumeroImagen;
        this.Titulo = NombreTitulo;
        this.Descripcion = NombreDescripcion;
    }
    Mostrar() {
        let Contador = ``;
        for (let i = 0; i < this.Imagen.length; i++) {
            Contador += `
            <div class="col-3 py-3 px-2">
                <div class="card h-100" style="border-radius: 5px; ;">
                    <img class="card-img-top" src="${this.Imagen[i]}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${this.Titulo[i]}</h5>
                        <p class="card-text h6">${this.Descripcion[i]}</p>
                        <button type="button" class="btn btn-dark mt-2" onclick="Tarjetas.MostrarCarrito('${this.Imagen[i]}')">Agregar Carrito</button>
                    </div>
                </div>
            </div>
            `;
        }
        document.getElementById("Total").innerHTML = Contador;
    }
    MostrarCarrito(ImagenParaCarro){
        let aux=``;
        acumulador.push(ImagenParaCarro);
        if(acumulador.length<=12){
            aux=`<div class="col-12 text-right pr-5 mr-5 h5"> Numero De Elementos En Carrito: ${(acumulador.length)} </div>`
            for(let i=0;i<acumulador.length;i++){
            aux+=`
            <div class="col-1 px-0">
                <div class="row mx-0">
                    <img src="${acumulador[i]}" alt=":)" width="122px" height="120px" class="px-1"style="border-radius: 10%; " >
                </div>
                <div class="row mx-0 pl-2">
                <button type="button" class="btn btn-link py-0 my-0 px-0 text-dark" onclick="Tarjetas.EliminarDelCarrito(${i},${acumulador.length})">Eliminar</button>
                <a href="producto.html"><button type="button" class="btn btn-link py-0 my-0 px-2 text-dark" onclick="ShowProducto(${i})" >Ver</button></a>
                </div>
            </div>
            `
            }
            document.getElementById("Total2").innerHTML=aux;
            document.getElementById("TotalElementos").innerHTML=`(${acumulador.length})`;
            localStorage.setItem('Carrito',JSON.stringify(acumulador))
        }
        else{
            localStorage.removeItem('Carrito')
        }
        console.log(acumulador);
    }
    EliminarDelCarrito(posicion,tamaño){
        let aux=` `;
        console.log(posicion, tamaño);
        acumulador.splice(posicion,1);
        if(acumulador.length<=12){
            aux=`<div class="col-12 text-right pr-5 mr-5 h5"> Numero De Elementos En Carrito: ${(acumulador.length)} </div>`
            for(let i=0;i<acumulador.length;i++){
            aux+=`
            <div class="col-1 px-0">
                <div class="row mx-0">
                    <img src="${acumulador[i]}" alt=":)" width="122px" height="120px" class="px-1"style="border-radius: 10%; " >
                </div>
                <div class="row mx-0 pl-2">
                <button type="button" class="btn btn-link py-0 my-0 px-0 text-dark" onclick="Tarjetas.EliminarDelCarrito(${i},${acumulador.length})">Eliminar</button>
                <button type="button" class="btn btn-link py-0 my-0 px-2 text-dark onclick="ShowProducto(${i})">Ver</button>
                </div>
            </div>
            `
            }
            document.getElementById("Total2").innerHTML=aux;
            document.getElementById("TotalElementos").innerHTML=`(${acumulador.length})`;
            localStorage.setItem('Carrito',JSON.stringify(acumulador))
        }
        else{
            localStorage.removeItem('Carrito')
        }   
    }
}
const Imagenes = ["../images/CardImages/Imagen8.JPG", "../images/CardImages/Imagen9.JPG", "../images/CardImages/Imagen10.JPG", "../images/CardImages/Imagen11.JPG", "../images/CardImages/Imagen12.JPG", "../images/CardImages/Imagen13.JPG", "../images/CardImages/Imagen14.JPG", "../images/CardImages/Imagen15.JPG", "../images/CardImages/Imagen16.JPG", "../images/CardImages/Imagen17.JPG"];
const Titulos = ["CAMA HOSPITALARIA TIPOA", "CAMA HOSPITALARIA TIPOB", "CAMA HOSPITALARIA TIPOC", "CAMA HOSPITALARIA TIPOD", "CAMA HOSPITALARIA TIPOE", "CAMA HOSPITALARIA TIPOF", "CAMA HOSPITALARIA TIPOG", "SILLA DE RUEDAS TIPO A", "SILLA DE RUEDAS TIPO A", "SILLA DE RUEDAS TIPO A"];
const Descripciones = ["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus similique est, eaque  "
    , "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus similique est, eaque  ",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus similique est, eaque  ",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus similique est, eaque  ",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus similique est, eaque  ",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus similique est, eaque  ",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus similique est, eaque  ",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus similique est, eaque  ",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus similique est, eaque  ",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus similique est, eaque  "];
let acumulador=[];
let datos=[];

$("document").ready(function(){
    if (localStorage.getItem('Carrito')!=null){
        acumulador=JSON.parse(localStorage.getItem('Carrito'));
        aux=`<div class="col-12 text-right pr-5 mr-5 h5"> Numero De Elementos En Carrito: ${(acumulador.length)} </div>`;
        for(let i=0;i<acumulador.length;i++){
            aux+=`
            <div class="col-1 px-0">
                <div class="row mx-0 ">
                    <img src="${acumulador[i]}" alt=":)" width="122px" height="120px" class="px-1"style="border-radius: 10%; " >
                </div>
                <div class="row mx-0 pl-2">
                <button type="button" class="btn btn-link py-0 my-0 px-0 text-dark" onclick="Tarjetas.EliminarDelCarrito(${i},${acumulador.length})">Eliminar</button>
                <a href="producto.html"><button type="button" class="btn btn-link py-0 my-0 px-2 text-dark" onclick="ShowProducto(${i})">Ver</button></a>
                </div>
            </div>
            
            `
        }
        document.getElementById("Total2").innerHTML=aux;
        document.getElementById("TotalElementos").innerHTML=`(${acumulador.length})`;
    }

    $("#MostrarCarritoTwo").hover(function(){
        $(".Vertical-Transition").css("height","180px")
    },function(){
        $(".Vertical-Transition").css("height","32px")
    });
    $.get("https://api.mercadolibre.com/sites/MCO/search?category=MCO180800",
    function(data, status){
        for(let i=0;i<data.results.length;i++){
        Imagenes.push(data.results[i].thumbnail);
        Titulos.push(data.results[i].title)
        }
        console.log(Imagenes)
        Tarjetas = new Tarjeta(Imagenes, Titulos, Descripciones);
        Tarjetas.Mostrar();
    })
})

function ShowProducto(posicion){
    localStorage.setItem('Position',JSON.stringify(posicion));
}
