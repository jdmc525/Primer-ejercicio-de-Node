//Funciones

document.write("<h2>Funcion con return normal</h2>");

function edad() {
    let edad = prompt("Que edad tienes?");
    if (edad < 18) {
        alert ("No puede entrar");
    }else {
        alert("Acceso concedido");
    }
    return document.write (edad + "<br>"); //esto va a imprimir el valor de edad en pantalla
}

//loop para ejecutar la funcion 3 veces
for (let index = 0; index < 3 ; index++) {
    edad();   
}

//Si pusieramos el return antes de las instrucciones del programa
//Entonces no daria nada ya que funciona como el break de los bucles


//Parametros de funciones

document.write("<h2>Parametros de funciones</h2>");

function multiplicacion(num1, num2) {  //Los parametros que van a cambiar son num1 y num2, ya que sino tocaria volver a hacer otra funcion cada vez que se quisiera hacer otra multiplicacion
    let res = num1 * num2 ;
    return res;
}

document.write(`El resultado es ${multiplicacion(5,3)} <br>`); //Aqui se lo ponen los valores que quiera uno y ya esta


//Otra forma de declarar funciones

const suma = function(num1, num2) {
    let res = num1 + num2;
    return res;
}

document.write(`El resultado es ${suma(5,3)} <br>`);


//Funcion flecha
document.write("<h2>Funcion flecha</h2>");


const resta= (num1, num2)=>{  //Los parametros que van a cambiar son num1 y num2, ya que sino tocaria volver a hacer otra funcion cada vez que se quisiera hacer otra multiplicacion
    let res = num1 - num2 ;
    return res
}
document.write(`El resultado es ${resta(5,3)} <br>`);

//Forma simplificada funcion flecha
document.write("<h2>Forma simplificada funcion flecha</h2>");


let frase = "Hola genteeee";
const saludo = ()=> document.write(frase);

saludo();