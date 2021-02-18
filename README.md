# JavaScriptRepo
/* Esto es una forma de programar*/
//Otra forma 
/*
var ProductoUno ='Hola';
var ProductoDos='ComoEstas';

var Resultado =(ProductoUno +" "+ ProductoDos);
document.write(Resultado);

var numero=10;
var animal =prompt("Digite Numero");
document.write(Number(animal)+numero)


let TypeNumber=Number(prompt("Digite El Numero para saber si es par o impar"));
var Result;

Result=TypeNumber;

if(Result!=0){
    alert("El Numero "+TypeNumber+" es Impar");
    console.log("El Numero "+TypeNumber+" es Impar");
}
else{
    alert("El Numero "+TypeNumber+" Es Par");
    console.log("El Numero "+TypeNumber+" es Par");
}
*/

/*
//FUNCIONES
function MostrarAlerta(Numero1,Numero2){
    Resultado=Numero1+Numero2;
    return Resultado
    
}
Numero1=Number(prompt("Digite el Numero 1"));
Numero2=Number(prompt("Digite el Numero 2"));
Resultado=MostrarAlerta(Numero1, Numero2);
alert("El Resultado es: "+Resultado);

//CICLO FOR
for(let i=0;i<20;i++){
    if (i==10){
        continue;
    }
    console.log(i);
}
*/

// function PairNumber(){
//     const array=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
//     for(let i=1;i<=array.length;i++){
//         if(i%2!=0){
//             if(i==7){
//                 alert(`El dia ${array[i-1]} Es el dia Numero ${i}`);
//                 break;
//             }
//             continue;
//         }
//         console.log(`El dia ${array[i-1]} es par` );
//     }
// }


// function TotalCamas(){
//     NumeroDeCamas=Number(prompt("Digite El Numero De Camas Que Desea Comprar"));
//     ValorTotal=Total(NumeroDeCamas);
//     document.getElementById("Total").innerHTML=`
//     <b>$ ${ValorTotal}</b>`
//     alert("El valor a pagar es $"+ValorTotal)
// }
// function Total(Numero){
//     PrecioTotal=Numero*150000;
//     return PrecioTotal
// }

// class Inventario{
//     constructor(PrecioProducto,NumeroUnidades,NombreProducto){
//         this.Nombre=NombreProducto
//         this.Precio=PrecioProducto;
//         this.Unidades=NumeroUnidades;
//     }
//     PrecioTotal() {
//         if (this.Nombre=="CAMA"){
//             Total=(Math.pow((this.Precio),2))*this.Unidades;
//         }
//         else if(this.Nombre=="SILLA"){
//             Total=this.Precio*this.Unidades;
//         }
//         else if(this.Nombre=="CAMINADOR"){
//             Total=(this.Precio/2)*this.Unidades;
//         }
//         return Total;
//     }
//     Mostrartotal(){
//         const ValorFinal=this.PrecioTotal();
//         document.getElementById("Total").innerHTML=`
//             <b>$ ${ValorFinal}</b>`;
//         alert("El valor a pagar es $"+ValorFinal);
//     }
// }
// function BotonMostrar() {
//     NombreUnidad=String(prompt("Que Desea comprar puede elegir entre ('CAMA','SILLA','CAMINADOR')"))
//     PrecioDeUnidad=Number(prompt("Digite El precio De cada unidad del producto"));
//     NumeroDeUnidades=Number(prompt("Digite El Numero De Unidades Que Desea Comprar"));
//     let UnidadDeInventario= new Inventario(PrecioDeUnidad,NumeroDeUnidades,NombreUnidad);
//     UnidadDeInventario.Mostrartotal()
// }