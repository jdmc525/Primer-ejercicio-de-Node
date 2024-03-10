class apps {
    constructor(nombre,cantDescargas, puntuacion, tamaño){
        this.nombre = nombre;
        this.cantDescargas = cantDescargas;
        this.puntuacion = puntuacion;
        this.tamaño = tamaño;
        this.instalado = false;
        this.corriendo = false;

    }
    instalar (){
        if (this.instalado == false) {
        document.write(`La aplicacion ${this.nombre} se ha instalado <br>`);
        this.instalado = true;   
        }else {            
        document.write(`La aplicacion ${this.nombre} ya esta instalada <br>`);
        }
    }
    desinstalar (){
        if (this.instalado == true) {
            document.write(`La aplicacion ${this.nombre} se desinstaló <br>`);
            this.instalado = false;   
            }else {            
            document.write("La aplicacion no esta instalada <br>");
            }
    }
    abrir (){
        if (this.corriendo == false && this.instalado == true ) {
            document.write(`La aplicacion ${this.nombre} ha sido abierta <br>`);    
            this.corriendo = true;
        } else{
            document.write(`La aplicacion ${this.nombre} ya esta abierta subnormal <br>`);    
        }
        
    }
    cerrar(){
        if (this.corriendo == true && this.instalado == true) {
            document.write(`La aplicacion ${this.nombre} ha sido cerrada <br>`);
            this.corriendo = false;
        }else {
            document.write(`La aplicacion ${this.nombre} ya esta cerrada subnormal <br>`);    
        }
    }
    mostarInfo(){
    return `
        <b>${this.nombre}</b><br>
        Cantidad de descargas: ${this.cantDescargas}<br>
        Puntuación: ${this.puntuacion}<br>
        Tamaño: ${this.tamaño}<br><br>
        
        `
    }

}


const freeFire = new apps("Free Fire",10000, "3/5", "200mb");
const angryBirds = new apps("Angry Birds",10000000, "4/5", "120mb");
const clashOfClans = new apps("Clash Of Clans ",1000000, "3/5", "250mb");
const clashRoyale = new apps("Clash Royale",100000000, "5/5", "210mb");
const jetpackJoyride = new apps("Jetpack Joyride",1123546, "3/5", "110mb");
const dreamSoccer = new apps("Dream League Soccer",1555561, "4/5", "120mb");
const cod = new apps("Call of Duty Mobile",112354646, "4/5", "2.5gb");


//Imprimir la data
document.write(`Lista de aplicaciones  <br><br>`);
document.write(freeFire.mostarInfo());
document.write(angryBirds.mostarInfo());
document.write(clashOfClans.mostarInfo());
document.write(clashRoyale.mostarInfo());
document.write(jetpackJoyride.mostarInfo());
document.write(dreamSoccer.mostarInfo());
document.write(cod.mostarInfo());


//Probando los metodos
freeFire.instalar();
freeFire.abrir();
freeFire.abrir(); //Aqui da error porque ya esta cerrada

freeFire.cerrar();
freeFire.cerrar();  freeFire.cerrar(); //Aqui da error porque ya esta cerrada

freeFire.desinstalar();

clashRoyale.cerrar();