class animal {
    constructor(especie, edad, color, origen){
        this.especie= especie;
        this.edad = edad;
        this.color = color;
        this.origen= origen;
        this.info = `Hola gente, soy un ${especie}, tengo ${edad} años, soy de color 
        ${color} y vengo de ${origen}`;
    }

    //La funcion que se manda a llamar abajo*
    verInfo() {
        document.write(this.info + "<br>");             
    }

}



//Herencia

class ornitorrinco extends animal {
    constructor(especie, edad, color, origen, peso){
        super(especie, edad, color, origen);
        this.peso = peso ;  
    }

//Ejemplo de herencia con este metodo unico para este objeto

    sonido(){
        document.write("krrrrrrrrrrrrrrrr" + "<br>");
    }

//Ejemplo de Setter

    set setColor(newColor){
        this.color = newColor;
    }
    get getColor(){
        return this.color;
    }   
}


const orni = new ornitorrinco("ornitorrinco", 3, "azul", "El Area Limitrofe","16kg");
const panda = new animal("panda", 5, "blanco con negro", "Seattle");
const delfin = new animal("delfin", 6, "gris", "Madagascar");


//Se haria de esta forma larga sin una funcion

//document.write(ornitorrinco.info + "<br>"); 
//document.write(panda.info + "<br>");
//document.write(delfin.info + "<br>");


//Forma corta haciendo uso de la funcion*


orni.verInfo();
panda.verInfo();
delfin.verInfo();


//Esta la hereda la clase ornitorrinco de la clase animal
orni.sonido();


//Aca se pone en accion lo del setter
orni.setColor = "Verde" + "<br>";
document.write(orni.getColor);
