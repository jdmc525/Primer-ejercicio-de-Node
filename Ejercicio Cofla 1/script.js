let h_agua = 0.6;
let h_crema = 1;
let bh_heladix =1.6;
let bh_heladovich = 1.7;
let bh_helardo = 1.8;
let h_confites = 2.9;
let pote_cuarto = 2.9;

let cambio; 

let dinero = prompt('¿Cuanto dinero tienes?');



if (dinero >= 0.6 & dinero < 1 ) {
    cambio = dinero - h_agua;
    document.write('Palito de Helado de Agua ');
    document.write(' Tu vuelto es $' + cambio);
} else if (dinero >= 1 & dinero < 1.6) {
    cambio = dinero - h_crema;
    document.write('Palito de Helado de Crema ');
    document.write('Tu vuelto es $' + cambio);
} else if (dinero >= 1.6 & dinero < 1.7) {
    cambio = dinero - bh_heladix;
    document.write('Bombon Helado Marca Heladix ');
    document.write('Tu vuelto es $' + cambio);
} else if (dinero >= 1.7 & dinero < 1.8) {
    cambio = dinero - bh_heladovich;
    document.write('Bombon Helado Marca Heladovich ');
    document.write('Tu vuelto es $' + cambio);
} else if (dinero >= 1.8 & dinero < 2.9) {
    cambio = dinero - bh_helardo;
    document.write('Bombon Helado Marca Helardo ');
    document.write('Tu vuelto es $' + cambio );
} else if (dinero >= 2.9 ) {
    compra = prompt('Puedes elegir: a. Potecito de Helado con confites b. Pote de 1/4 de KG c. Ambos ');
    cambio = dinero - pote_cuarto;
    document.write('Tu vuelto es $' + cambio );
} else {
    alert('No tienes suficiente dinero para comprar algo');
}