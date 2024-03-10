class celulares {
    constructor(color,peso,resPant,resCam,ram){
        this.color = color;
        this.peso = peso;
        this.resPant = resPant;
        this.resCam = resCam;
        this.ram = ram;
        this.encendido = false;
    }
    botonEncendido(){
        if (this.encendido == false) {
            document.write("El telefono ha sido encendido" + "<br>");    
            this.encendido = true;
        }else if(this.encendido == true){
            document.write("El telefono ha sido apagado" + "<br>");    
            this.encendido = false;
        }        
    }

    reiniciar(){
        if(this.encendido == true){
            document.write("El telefono se ha reiniciado" + "<br>");    
        }else if (this.botonEncendido == false) {
            document.write("EL telefono esta apagado subnormal como la vas a reiniciar asi");
        }
    }
    foto(){
        document.write(`Se ha tomado una foto en una resolucion de <b>${this.resCam}</b> <br>`);
    }
    grabar(){
        document.write(`Se ha tomado un video en una resolucion de <b>${this.resCam}</b> <br>`);
    }
    mostrarInfo(){
        return `
        Color: <b>${this.color}</b><br>
        Peso:<b>${this.peso}</b><br>
        Resolución de pantalla: <b>${this.resPant}</b><br>
        Resolución de camara: <b>${this.resCam}</b><br>
        Memoria RAM: <b>${this.ram}</b><br>
        `
    }
}


//Clase que hereda lo anterior para cels de alta gamma

class celAltaGama extends celulares {
    constructor(color,peso,resPant,resCam,ram,cantCam){
        super(color,peso,resPant,resCam,ram)
        this.recFacial = false;
        this.cantCam = cantCam
    }
    camLenta(){
        document.write(`Se ha grabado un video en camara super lenta a una resolucion de <b>${this.resCam}</b> <br>`);
    }

    //Esto es para mostrar lo del reconomiciento facial
    botonEncendido(){
        if (this.encendido == false & this.recFacial == true) {
            document.write("El telefono ha sido encendido" + "<br>");    
            this.encendido = true;
        }else if(this.encendido == true){
            document.write("El telefono ha sido apagado" + "<br>");    
            this.encendido = false;
        }else if (this.recFacial == false) {
            document.write("Cara no reconocida, intente de nuevo" + "<br>");
        }        
    }
    //Aca podes llamar a un metodo y agregarle mas cosas 
    infoAltaGama(){
        return this.mostrarInfo() + `Cantidad de camaras: <b>${this.cantCam}</b><br>
        Camara lenta y reconocimiento facial incluido.
        `;
    }

}

const cel1 = new celulares("Azul","10kg", "320x480", "13Mpx", "4GB");
const cel2 = new celulares("Gris","9kg", "480x610", "20Mpx", "8GB");
const cel3 = new celulares("Magenta","7kg", "610x1080", "30Mpx", "16GB");

const cel4 = new celAltaGama("Verde","5kg", "1000x2040", "50Mpx", "32GB", 2);
const cel5 = new celAltaGama("Amarillo","6kg", "1000x2040", "60Mpx", "32GB", 2);

//cel3.botonEncendido();
//cel3.reiniciar();
//cel3.grabar();
//cel3.foto();
//cel3.botonEncendido();

document.write(`
    ${cel1.mostrarInfo()}<br><br>
    ${cel2.mostrarInfo()}<br><br>
    ${cel3.mostrarInfo()}<br><br>
    Celulares de Gama Alta <br>
    ${cel4.mostrarInfo()}<br><br>
    ${cel5.mostrarInfo()}<br><br>
    `
);


cel4.botonEncendido();

cel4.camLenta();





