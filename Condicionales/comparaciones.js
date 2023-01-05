//Comparaciones 


//Igualdades

//== -----> Solo compara el valor
//=== ---->  //Compara tanto el valor como el tipo de caracter que es (string, number, bool, etc..)

var a = 2;

var b = "2";

if (a == b) {
    console.log("A es igual a B  -- Debil");
}


if (a === b) {
    console.log("A es igual a B  -- Fuerte");  //Compara tanto el valor como el tipo de caracter que es (string, number, bool, etc..)
}


//Desigualdad

// != ------> Toma en cuenta solo el valor para la desigualdad
// !== -----> Toma en cuenta tanto el valor como el tipo para la desigualdad

let c = 4;
let d = "4";

if (c != d ) {
    console.log("C no es igual a D");
}



if (c !== d ) {
    console.log("C no es igual a D");
}



// Comparaciones mayor que y menor que
let max = 10;
let min = 5;

if (max > min) {
    console.log("max es mayor que min")
}
if (max >= 10) {
    console.log("max es mayor o igual que min")
}

if (min < max) {
    console.log("min es menor que max")
}
if (min <= max) {
    console.log("min es menor o igual que max")
}