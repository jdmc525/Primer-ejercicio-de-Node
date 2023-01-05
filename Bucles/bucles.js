//Bucles


//Bucles For

/*Algo importante a considerar es que al parecer lo que For siempre mete los valores del bucle dentro de 
una variable que se crea solo dentro de ese bucle, por ejemplo lo de "i"  */


// i = i + 1   o  i += 1   o i++ es todo lo mismo son formas en que incremente en 1 

for (let i = 0; i < 20; i +=2) {
    console.log(i+ 2);
}


//Loop para contar los espacios de una lista

var lista = [1,2,3,4,5,5,5,6,6,7,74,85];
for (let i = 0; i < lista.length; i++){ 
    console.log (i);    
}

// For.... of,   practicamente te hace el bucle para imprimir los valores de una lista

for (const i of lista) {
    console.log(i);
}

// For ...... each practicamente te hace el bucle para imprimir los valores de una lista pero as eficiente

lista.forEach(a =>{     //funcion flecha, son mas nuevas y mas funcionales
    console.log(a);
})


// For ....... in  -------> Para enunciar objetos

let casa = {
    color: "azul",
    nPuertas: 7,
    precio: "$ 18,000",
    cuartos: 5, 
}

for (let valor in casa) {
    console.log(valor); //Aca solo tira los titulos de las propiedades
    console.log(casa[valor]); //Aca ya tira los valores   
}


// Asi se pueden agregar propiedades a un objeto y mandarlas a llamar estandofuera de los parentesis
let prop = "precio";
console.log(casa[prop]);


/**********************************************************/

//While

var a = 0

while (a < 20) {
    console.log(a + 1);
    a++  //Si no se pone esta linea se va a ejecutar por infinitamente
}


// Do.....While
//La diferencia es que este se va a ejecutar al menos una vez

var b = 0;

do {
    console.log(b + 1);
    b++  
} while (b<5);






