var estudiantes = ["Maria", "Pedro", "Juan", "Simon"];  // Se define un Array

function saludarEstudiante(estudiante) {
    console.log(`Hola ! ${estudiante}`);    // Se define una funcion
}

for(var i = 0; i < estudiantes.length; i++) {
    saludarEstudiante(estudiantes[i]);      // Se define el ciclo, junto a la cantidad de digitos que suma la variable i
}


//<======================================== Otra manera de hacerlo es: ========================================>


var estudiantes = ["Maria", "Pedro", "Juan", "Simon"];  // Se define un Array

function saludarEstudiante(estudiante) {
    console.log(`Hola ! ${estudiante}`);    // Se define una funcion
}

for(var estudiante of estudiantes) {
    saludarEstudiante(estudiante)
}