// / / / / / / CODIGO DEL CUADRADO / / / / / /

console.group("Cuadrados"); // crea un grupo para mostrar en la consola web de forma mas ordenada

// / / / Perimetro
function perimetroCuadrado(lado) {
  return lado * 4;
}

// / / / Area
function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd(); // cierre del grupo

// / / / / / / / / / / CODIGO DEL TRIANGULO / / / / / / / / /

console.group("Triangulos");

// / / / Perimetro
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

// / / / Area
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.groupEnd();

// / / / / / / CODIGO DEL TRIANGULO / / / / / /

console.group("Circulos");

// / / Radio
function radioCirculo(radio) {
  return radio;
}

// / / Diametro
function diametroCirculo(radio) {
  return radio * 2;
}
// / / PI
const Pi = Math.PI;

// / / Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio); // llamamos una funcion dentro de otra funcion
  return diametro * Pi;
}
// / / Area
function areaCirculo(radio){
    return (radio * radio) * Pi
}
console.groupEnd();
