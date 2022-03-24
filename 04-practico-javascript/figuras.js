// / / / / / / CODIGO DEL CUADRADO / / / / / /

console.group("Cuadrados"); // crea un grupo para mostrar en la consola web de forma mas ordenada

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + " cm^2");

console.groupEnd(); // cierre del grupo

// / / / / / / CODIGO DEL TRIANGULO / / / / / /

console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
  "Los lados del triangulo miden: " +
    ladoTriangulo1 +
    " cm " +
    ladoTriangulo2 +
    " cm " +
    baseTriangulo +
    " cm "
);

console.log("La altura del triangulo mide: " + alturaTriangulo + " cm ");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + " cm ");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es de: " + areaTriangulo + " cm^2 ")

console.groupEnd();

// / / / / / / CODIGO DEL TRIANGULO / / / / / /

console.group("Circulos");

// / / Radio
const radioCirculo = 4;
console.log("El radio del circulo es de: " + radioCirculo + " cm ");

// / / Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es de: " + diametroCirculo + " cm ");

// / / PI
const Pi = Math.PI;

// / / Circunferencia 
const perimetroCirculo = diametroCirculo * Pi
console.log("La circunferencia del circulo es de: " + perimetroCirculo + " cm ");

// / / Area
const areaCirculo = (radioCirculo * radioCirculo) * Pi;
console.log("El area del circulo es de: " + areaCirculo + " cm^2");

console.groupEnd();
