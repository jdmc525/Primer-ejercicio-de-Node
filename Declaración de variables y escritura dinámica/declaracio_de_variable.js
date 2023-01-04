//Declaracion de variables


// Variables basicas, pueden cambiar con el tiempo
var a = 5;  

console.log(a);
a = 100;
console.log(a);



//Variable Let, es lo mismo que VAR pero solo afecta al bloque donde ha sido declarada, no sale del bloque el valor 
let Vlet= "Soy el primer texto xd";

if (true) {
    let Vlet= "Soy el segundo texto jeje";
}

console.log(Vlet);


//Constante

const Vcon = 4;
console.log(Vcon);
// const Vcon = 2; --------> Si se activa esta linea daria un codigo de error ya que la constante ya ha sido definida 




//************************************************************************************* */

//Escritura dinamica ----> Quiere decir que en este lenguaje las cosas pueden cambiar durante el mismo codigo, por eso es dinamico 

var hola = "Soy un texto";

console.log(typeof hola)

var hola = 5;

console.log(typeof hola)
