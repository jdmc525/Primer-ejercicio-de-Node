//Else-If 

var nota = 5;

if (nota === 5 ) {
    console.log("Excellent");
}else if (nota === 4) {
    console.log("Good job but you could do better");
}else if(nota === 3 ){
    console.log("Not bad");
}else if(nota === 2 ){
    console.log("Bad");
}else if(nota === 1 ){
    console.log("Terrible");
} else {
    console.log("Unknown input, please enter a valid grade from 1 to 5");
}


//Switch

const nota2 = 0;

switch (nota2) {
    case 5:
        console.log("Excellent");
        break;
    case 4:
        console.log("Good job but you could do better");
        break;
    case 3:
        console.log("Not bad");
        break;
    case 2:
        console.log("Bad");
        break;
    case 1:    
        console.log("Terrible");
        break;
        default:
            console.log("Unknown input, please enter a valid grade from 1 to 5");  
        break;
}