
let numero1 = 2;
let numero2 = 3;

let resultado = "" + numero1 + numero2;

document.write(resultado);


//concatenar strings
let saludo = "Hola buenos dias ";
let nombre =prompt("Cuales tu nombre?");

let frase = saludo.concat(nombre);   //Funcion concat
document.write(frase);

let frase2 =  `Adios mi doug el ${nombre}`  //backtick, te ahorra crear otra variable

document.write(frase2);


frase3 = `<h1> Hola mi genteee</h1>`  //tambien es posible hacer codigo html dentro de js con los backticks
document.write(frase3);


cosa = "Hola gente soy 'Manuel' ";
cosa2 = 'Hola gente soy "Manuel"';
alert(cosa.concat(cosa2));