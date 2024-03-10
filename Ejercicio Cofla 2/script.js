
let gratis = false;

let peaje = (hora)=>{
    let edad = prompt("¿Cuál es tu edad?");
    if (edad < 18) {
        alert("Debes ser mayor de 18 para acceder a esta fiesta");
    }else {
        if (hora >=2 && hora <7 && gratis == false) {
            nombre =prompt("¿Cuál es tu nombre?");
            alert(`Felicidades ${nombre}, te has ganado una entrada completamente gratis por ser el primero despues de las 2AM `);    
            gratis = true;
        }else{
        nombre =prompt("¿Cuál es tu nombre?");
        alert(`Bienvenido ${nombre}, puedes entrar pero debes pagar $20 la entrada ya que son las ${hora} `);
        }
    }
};

peaje(2);
peaje(2);
peaje(7);
peaje(2);
peaje(6);
