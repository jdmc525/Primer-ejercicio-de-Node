//While 
//El codigo se ejecuta siempre que se cumpla la funcion
document.write("<h1>While</h1>");

let numero = 0;

while (numero < 10) {
    document.write(numero);
    numero++;    
}

document.write("<br>");  //esto hace un salto de linea

//Do while

//El codigo se ejecuta una vez siempre y luego evalua si se cumple la funcion para seguir ejecutandose

document.write("<h1>Do While</h1>");

do {
    document.write(numero);
    numero++;    
} while (numero < 15);


document.write("<br>");

//Break
//Sirve para terminar el bucle si se satisface determinada condicion que se puede poner en un if
document.write("<h1>Break</h1>");

while (numero < 1000) {
    document.write(numero);
    numero++;  
    if (numero == 20) {
        break;
    } 
}

document.write("<br>");

//FOR

//Aqui si declaramos cuantas veces se va a ejecutar el codigo
//Se declara i, se pone la condicion, luego se edita

document.write("<h1>For</h1>");
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue;   //Esto es para saltarse esa iteracion, se va a saltar el resto del bucle y va a continuar con el siguiente bucle, osea se salta el 5 en este caso
    }
    document.write(i + "<br>");    
}


document.write("<br>");

//For in
//Muestra la posicion de cada elemento, aqui tambien aplica si le cambios el caracter, como antes que le asignamos en vez de 0 seria nintendo y asi

document.write("<h1>For in</h1>");


let frutas = ["manzana", "naranja", "banano", "uva", "berenjena"];

for ( fruta in frutas ) {
    document.write(fruta + "<br>");
}

document.write("<br>");

//For of
//Muestra lo que esta dentro del array en orden de posicion 

document.write("<h1>For of</h1>");


for (fruta of frutas) {
    document.write(fruta + "<br>");
}


//Label
document.write("<h1>Label</h1>");

let colores = ["azul", "verde", "violeta", "rosa"];
let carros = ["honda", "ford", colores, "camioneta cutre"]


forDeTal:  //Esto es el label sirve para mandar a llamar a todo el For y poder aplicarle un break o continue a todo el bucle
for (let carro in carros){  //carro se encarga de guardar las posicions 0,1,2,etv
    if (carro == 2) {
        for(let color of colores){  //aqui color guarda los valores del array  Colores
            continue forDeTal; //Aqui se salta todo el bucle entero y pasa a camioneta cutre
            document.write(color + "<br>"); //imprime valores 
            
        }  
    }else {
        document.write(carros[carro] + "<br>"); //imprime posiciones asi que por eso se especifica para que imprima mejor los valores
    }
}


