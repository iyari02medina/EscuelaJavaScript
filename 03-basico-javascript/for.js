var estudiantes = ["Charly", "Fito", "Japli", "Trufa"];

function saludarEstudiantes(estudiante){
    console.log("hola, " + estudiante);
}

// / / / /  / / / / / /  PRIMERA OPCION / / / / / / / / / / / / / / / /
for(var i = 0; i<estudiantes.length; i++){ // inicializarmos el for con una varible "i" del tamaño de nuetro array  
    saludarEstudiantes(estudiantes[i]);
}


// / / / / / / / / / / SEGUNDA OPCION / / / / / /// / / / / / / / / / / / /
for(var estudiante of estudiantes){ // inicializar una variable en singular de nuestro array  que esta en plural 
    saludarEstudiantes(estudiante);
}
