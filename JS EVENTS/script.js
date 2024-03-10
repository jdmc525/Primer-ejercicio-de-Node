const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
//const btn = document.querySelector('#btnCalculo');
const resultado = document.querySelector('.resultado');
const btn2 = document.querySelector('#btnCalculo2');
const form = document.querySelector('#form');

/*
function btnOnClick() {
    console.log(Number(num1.value) + Number(num2.value)); 
}*/

form.addEventListener('click', btnOnClick);

function btnOnClick(event) {
    //event.preventDefault();
    const res1 =  (parseInt(num1.value) + parseInt(num2.value)); 
    resultado.innerHTML = "El resultado de la suma es igual a:  <br>" + res1;
}