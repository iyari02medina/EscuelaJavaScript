// funciones declarativas 
function miFuncion (){
    return 3;
}
miFuncion();

// funciones de expresion 

var miFuncion = function(a,b){
    return a + b;
}
miFuncion();

// Ejemplo 
function saludarEstudiantes(estudiante){
    console.log("hola" + " " + estudiante);    
}
saludarEstudiantes("Iyari");

function suma(a,b){
    var resultado = a + b;
    return resultado;
}
suma(1,2);
console.log(suma(1,2))