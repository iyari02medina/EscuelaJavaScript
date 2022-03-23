// pasos para usar variables 
var miNombre; // se declara la variable 
miNombre = "Iyari"; // se inicializa una variable 

console.log(miApodo); // undefined porque hoisting sube la variable al entorno glabal pero no la define
var miApodo = "Itzuri"
console.log(miApodo); // Itzuri porque el console.log se usa cuando la variable ya esta definida 

// / / / / // / / / / / / / / / / / / 

hey(); // hola undefined. porque la funcion se inicio antes de declarar el valor de la variable miApellido. el hoisting sube la funcion pero con valor undefined

function hey(){
    console.log("hola " + miApellido)
}
var miApellido = "Medina"