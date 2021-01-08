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
*/

let TypeNumber=Number(prompt("Digite El Numero para saber si es par o impar"));
var Result;

Result=TypeNumber%2;

if(Result!=0){
    alert("El Numero "+TypeNumber+" es Impar");
    console.log("El Numero "+TypeNumber+" es Impar");
}
else{
    alert("El Numero "+TypeNumber+" Es Par");
    console.log("El Numero "+TypeNumber+" es Par");
}
