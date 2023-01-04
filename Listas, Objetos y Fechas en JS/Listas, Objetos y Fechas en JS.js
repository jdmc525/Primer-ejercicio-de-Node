//Listas o arrays o arreglos

const lista = [1, null, true, "Hola", undefined]; //Puede ir cualquier cosa adentro

const lista2 = new Array (4);  //Se le pueden declarar espacios vacios 
console.log(lista2);
lista2[1] = "Hola gente";  //Luego a esos espacios se les puede asignar algo en la posicion que uno desee, recuerda que empieza desde 0
console.log(lista2);

const lista4 = [lista, lista2];   // Incluso podes meter listas dentro de listas
console.log(lista4);



//Objetos   --> Cosas de la vida real 

var miCarro = {
    marca: "Ford Focus",
    "año-actual": 2013,  //Se puede definir el atributo entre comillas 
    matriculaPagada: true,
    partes: ["llantas","puertas","vidrio","radio con bluetooth"],

    
    //Se puede definir un objeto dentro de un objeto
    diseño: {
        colorPrincipal: "Azul",
        colorSecundario: "Rojo",
        vinilos: false,
    }
}



//Para mandar a llamar las cosas se usan el "."
console.log(miCarro.diseño.colorPrincipal);


//Se pueden editar los atributos o crear nuevos
miCarro.diseño.colorPrincipal = "Verde";
miCarro.matricula = "PAL69 12"

console.log(miCarro.diseño.colorPrincipal);
console.log(miCarro.matricula);




//Fechas
//Librerias de apoyo Moment.js

var ahora = new Date ();
console.log(ahora);

const fecha_milis= new Date(595555);  //Como que te da la fecha en milisegundos desde 1970 o algo asi medio raro
console.log(fecha_milis);

const fecha_cadena = new Date("feb 5 2040"); //Establecer la fecha manualmente 
console.log(fecha_cadena);

const fecha_valores = new Date(2020, 6, 30);  //Al igual que con los arrays, empieza a contar desde 0, entonces en este caso 6 = Julio 
console.log(fecha_valores);


const dia = ahora.getDate();
const month = ahora.getMonth();
const year = ahora.getFullYear();

console.log(dia,month,year);


