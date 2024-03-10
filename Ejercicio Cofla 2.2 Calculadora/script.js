let tipoOperacion = prompt(`Que operacion desea realizar? \n a.Suma \n b.Resta \n c.Multipliacion \n d.Division`);
let num1 = parseInt(prompt("Dame el primer numero"));
let num2 = parseInt(prompt("Dame el segundo numero"));

const suma = (num1, num2)=> { 
    let res = num1 + num2;
    document.write(`El resultado es ${res}`);
}


const multiplicacion = (num1, num2)=> { 
    let res = num1 * num2;
    document.write(`El resultado es ${res}`);
}

const resta = (num1, num2)=> { 
    let res = num1 - num2;
    document.write(`El resultado es ${res}`);
}

const division = (num1, num2)=> { 
    let res = num1 / num2;
    document.write(`El resultado es ${res}`);
}


if (tipoOperacion == "a") {
    suma(num1, num2);
}else if(tipoOperacion == "b"){
    resta(num1, num2);
}else if(tipoOperacion == "c"){
    multiplicacion(num1, num2);
}else if(tipoOperacion == "d"){
    division(num1, num2);
}  