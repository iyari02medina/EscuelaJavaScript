var numero = 10;

switch (numero) {
  case 1:
    console.log("Soy uno");
    break; // usamos break para que pare de ejecutar el programa en caso de ser verdad
  case 10:
    console.log("Soy un diez");
    break;
  case 100:
    console.log("Soy un cien");
    break;
  default: // se activa cuando ningun case es verdadero 
    console.log("no soy nada");
}

// / / / / / / / / / / / RETO / / / / / / / / / / / / / / / / 

var op1 = "piedra";
var op2 = "papel";
var op3 = "tijeras"

function juego(user,cup){
    switch (true){
        case (user === cup):
            console.log("Es un empate");
            break;
        case (user=== op1 && cup === op3):
            console.log("Gana el usuario");
            break;
        case (user === op2 && cup === op1):
            console.log("Gana el usuario");
            break;
        case ( user === op3 && cup === op2):
            console.log("Gana el usuario");
            break;
        case (cup === op1 && user === op3):
            console.log("Gana la cup");
            break;
        case ( cup === op2 && user === op1):
            console.log("Gana la cup");
            break;
        default:
            console.log("Gana la cup");
    }
}
juego(op2,op3);