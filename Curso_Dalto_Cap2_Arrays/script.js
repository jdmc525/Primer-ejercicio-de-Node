//Arrays

let personajes = ["Mario", "Luigi", "Peach", "Bowser", "Toad"];

document.write(` ${personajes[0]} es de: <br>`); //con las back tik se puede poner html y pos asi se edita

//Array asociativo
//Osea en vez de decir que cuando este en la posicion 0 te 
//de el primer elemento, le pones un nombre a la posicion 0 
//para que te de ese elemento

let videojuegos = {
    nintendo: "The legend of Zelda",
    playstation: "The last of us",
    xbox : "Halo",
    sega: "Sonic"
}; 

document.write(`<b>${videojuegos["sega"]} </b>`); //En vez de la posicion 0 se pone nintendo y ya esta 
