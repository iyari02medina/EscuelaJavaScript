var perrijos = ["Charly", "Trufa", "Japlin", "Fito"];

function saludarPerrijos(perrijo){
    console.log("Hola " + perrijo);
}

while(perrijos.length > 0){
    console.log(perrijos)
    var perrijo = perrijos.shift();
    saludarPerrijos(perrijo);
}