var numero = 1;

var resultado = numero === 1 ? console.log("Soy un 1") : console.log("No soy 1");


var player1 = "papel";
var cpu = "piedra";
var resultado;


    if (player1 == "papel" && cpu == "tijera") {
        console.log("Perdiste man");
    
    } else if (player1 == "piedra" && cpu == "papel") {
        console.log("Perdiste man");
    
    } else if (player1 == "tijera" && cpu == "piedra") {
        console.log("Perdiste man");
    
    }else if (cpu == "papel" && player1 == "tijera") {
        console.log("Ganaste man");
    
    }else if (cpu == "piedra" && player1 == "papel") {
        console.log("Ganaste man");
    
    }else if (cpu == "tijera" && player1 == "piedra") {
        console.log("Ganaste man");
    
    }else if (cpu == player1 ) {
        console.log("Empate");
    }
     else {
        console.log("Ese caracter no es valido intenta de nuevo");
    }    



    
var player1 = prompt("Juguemos!!! \nElige un número: \n1.Piedra 2.Papel 3.Tijera");

var options = [1,2,3]
var cpu = options[Math.floor(Math.random() * 3)];

var piedra = 1;
var papel = 2;
var tijera = 3;

switch (true ) {
    case (player1 == cpu):
        alert("Empate");
        console.log(cpu);
        break;
    
    case(player1 == 2 && cpu == 1):
        alert("Ganaste");
        console.log(cpu);
        break;
    
    case(player1 == 3 && cpu == 2):
        alert("Ganaste");
        console.log(cpu);
        break;

    case(player1 == 1 && cpu == 3):
        alert("Ganaste");
        console.log(cpu);
        break;
    
    default:
        alert("Perdiste");
        console.log(cpu);
        break;
}


