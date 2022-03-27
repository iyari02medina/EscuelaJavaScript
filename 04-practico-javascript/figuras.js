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

// / / / / / / CODIGO DEL CIRCULO / / / / / /

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
// / / Area Circulo
function areaCirculo(radio) {
  return radio * radio * Pi;
}
console.groupEnd();

// / / / / / / / / / / Aqui interactuamos con el HTML // / / / / / / / / / /

// / / / / / Cuadrado

/* "document.getElemetById()" */
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

// / / / / / Triangulo

function calcularPerimetroTriangulo() {
  const input = document.getElementById("InputLado1Triangulo");
  const lado1 = Number(input.value);

  const input2 = document.getElementById("InputLado2Triangulo");
  const lado2 = Number(input2.value);

  const input3 = document.getElementById("InputBaseTriangulo");
  const base = Number(input3.value);

  const perimetro = perimetroTriangulo(lado1, lado2, base);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const input3 = document.getElementById("InputBaseTriangulo");
  const base = Number(input3.value);

  const input4 = document.getElementById("InputAlturaTriangulo");
  const altura = Number(input4.value);

  const area = areaTriangulo(base, altura);
  alert(area);
}

// / / / / / Circulo

function calcularCircunferenciaCirculo(){
  const input = document.getElementById("InputCirculo");
  const radio = input.value;

  const circunferencia = perimetroCirculo(radio);
  alert(circunferencia);
}

function calcularAreaCirculo(){
  const input = document.getElementById("InputCirculo");
  const radio = input.value;

  const area = areaCirculo(radio);
  alert(area);
}
