if (true) {
  console.log("Hola"); // Hola
}

if (false) {
  console.log("Hola"); // no se imprime nada porque si la condicion que esta en el if es false no se ejecuta nada.
}

if (false) {
  console.log("Hola"); // no se imprime nada por ser falso
} else {
  // ó
  console.log("soy falso"); //Soy falso. se imprime porque el "else" funciona cuando queremes ejecutar algo que es falso
}

// / // / / / / / / / / / / / /  EJEMPLO / / / // / / / / / / / / / / / / / / /

var edad = 19;

if (edad === 18) {
  console.log("Puedes votar, sera tu primera vez");
} else if (edad > 18) {
  console.log("Puedes votar de nuevo");
} else {
  console.log("Aun no puedes votar");
}

// / / / / / / / / OPERADOR TERNARIO / / / / / / / / / /  / / / /

//       condition ? true : false;           //

var numero = 1

var resultado = numero === 1 ? "Si soy un uno"  : "No soy un uno"

console.log(resultado)

// / / / / / / / /  / / / /  RETO / / /  //  /   / / / / /  

var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijeras";

function juego(user,cup){
    if(user === cup){
        console.log("empate");
    } else if (user=== op1 && cup === op3) {
        console.log("Gana el usuario")
    } else if (user === op2 && cup === op1){
        console.log("Gana el usuario");
    } else if ( user === op3 && cup === op2){
        console.log("Gana el usuario");
    }else if (cup === op1 && user === op3) {
        console.log("Gana la cup");
    } else if ( cup === op2 && user === op1){
        console.log("Gana la cup");
    } else {
        console.log("Gana la cup");
    }
}
juego(op1,op3);