const h1 = document.querySelector('h1');
const parrafo = document.querySelector('.parrafino');
const parrafo2 = document.querySelector('p');
const input = document.querySelector('input');

//EDITAR CONTENIDO

h1.innerHTML= 'Bienvenido conshesumare';
parrafo.innerHTML = 'Parrafo con clase pero cool <br>'; 


//SETEAR CLASES

parrafo2.setAttribute('class', 'azul');
console.log(parrafo2.getAttribute('class'));

h1.classList.add('titulo1');
console.log(h1.getAttribute('class'));


parrafo.classList.remove('parrafino');


//EDITAR CONTENIDO DE INPUTS

input.value = '123456';


//CREAR ELEMENTOS

const img = document.createElement('img');

parrafo.innerHTML = " ";

img.setAttribute('src', 'https://imgs.search.brave.com/aagtcr0qdXzHeo09INNi10BE4sDcU0hS2V0zRepi2E0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vY29kaWdv/ZXNwYWd1ZXRpLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OC8xMi9zcGlkZXIu/cG5nP3Jlc2l6ZT0x/MjAwLDUyMCZxdWFs/aXR5PTgwJnNzbD0x');
img.setAttribute('height', '100px');
parrafo.append(img); 






































/*var articulos = [
    {nombre: "Bici", precio: 1200  },
    {nombre: "Plancha", precio: 600},
    {nombre: "Armario", precio: 2500},
    {nombre: "Silla gamer", precio: 2100}
];


var filtroArticulos = articulos.find(function (articulo) {
        return articulo.precio === 2000;
});

//



let nombre = "Jose";
let apellido = "Mejia";
let nombreDeUsuario = "jdmc";
let edad = 20;
let correo = "jdmejia525@gmail.com";
let mayorDeEdad = true;
let dineroAhorrado = 6000;
let deudas = 2600;


console.log(nombre + apellido);
console.log(dineroAhorrado - deudas);


///FUNCIONES




let name1 = "Juan David ";
let lastname = "Castro Gallego";
let nickname = "juandc";


function imprimirDatos(name,lastname,nickname) {
    let completeName = name1 + lastname;    
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");    

}

imprimirDatos(name1,lastname,nickname);



//CONDICIONALES


const tipoDeSuscripcion = "Basic";


var opciones = ["Free", "Basic", "Expert", "ExpertPlus"];
var texto = ["Solo puedes tomar los cursos gratis","Puedes tomar casi todos los cursosde Platzi durante un mes","Puedes tomar casi todos los cursos de Platzi durante un año","Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];

for (let i = 0; i < 4; i++) {
        if (tipoDeSuscripcion == opciones[i]) {
            console.log(texto[i]);
        } 
}


if(tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if (tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
    
} else if(tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");

}else if(tipoDeSuscripcion == "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");

}




const tipodeSuscripcion = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertPlus:"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}


function obtenerTipodeSub(suscripcion) {
    if(tipodeSuscripcion[suscripcion]){    
        console.log(tipodeSuscripcion[suscripcion]);
    return
    }
    console.error('La subscripcion que elegiste no existe');
}


obtenerTipodeSub('free');



switch (tipoDeSuscripcion) {
    case "Free":
        console.log("Solo puedes tomar los cursos gratis");
        break;
    case "Basic":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        break;
    case "Expert":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        break;
    case "ExpertPlus":
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        break;
}



//MAS FUNCIONES PERO CON ARRAYS Y OBJETOS

function imprimirPrimer(array) {
        
        console.log(array[0]);
}

imprimirPrimer(opciones);



for (opcion of opciones){
    console.log(opcion + " ");
}




//CICLOS

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}


var contador=0;
var contador2=10;

while(contador<5){
    console.log("El valor de i es: " + contador);
contador++
}


while(contador2>=2){
    console.log("El valor de i_2 es: " + contador2);
contador2--
}


/************************/
/*
var res = prompt("Ingrese una respuesta a la siguiente operacion ----> 2 + 2 = ____");

while (res != 4) {
    alert("La respuesta es incorrecta");
    res = prompt("Ingrese una respuesta a la siguiente operacion ----> 2 + 2 = ____");
}



//OBJETOS


let jugadores = {
    sudamerica : "Messi",
    sudamerica: "Neymar Jr",
    europa : "Mbappe",
    asia: "Kim",
    africa: "Mane"
};

let arr = Object.values(jugadores);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[0]);
    
}

for (const clave in jugadores) {
    if (jugadores.hasOwnProperty(clave)) {
        console.log(`${clave}: ${jugadores[clave]}`);
    }
}


*/