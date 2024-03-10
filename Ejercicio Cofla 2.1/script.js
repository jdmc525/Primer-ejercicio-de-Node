
let num_alumnos = prompt("Cuantos alumnos son?");
let alumnosTotales = [];

for (let index = 0; index < num_alumnos; index++) {
    alumnosTotales[index] = [prompt(`Nombre del alumno ${index + 1}`), 0];
    
}

const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(`${nombre} estuvo presente o ausente?`);
    if (presencia == "p" || presencia == "presente") {
        alumnosTotales[p][1]++;
    }
}

for (let i = 0; i < 20; i++){
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    }
}

for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}: <br>
    _________Presentes: ${alumnosTotales[alumno][1]} <br>
    _________Ausencias: ${30 - alumnosTotales[alumno][1]}<br>
    `;
    if(30 - alumnosTotales[alumno][1] > 18 ){
        estado =`${alumnosTotales[alumno][0]} ha reprobado <br> ` ;
    }else{
        estado = `Muy bien ${alumnosTotales[alumno][0]} has aprobado <br>`
    }
    document.write(resultado);
    document.write(estado);
}