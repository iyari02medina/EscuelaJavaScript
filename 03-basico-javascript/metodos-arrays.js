var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "Tv", costo: 2500 },
  { nombre: "Libro", costo: 340 },
  { nombre: "celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
];

// / / / / / / / / / / / / / / / METODOS PARA RECORRER ARRAYS / / / / / / / / / / /

// / / / / / / / FILTER

//".filter" agrega a un nuevo array los articulos que cumplen con la condicion
var articulosFiltrados = articulos.filter(function (articulo) {
  return articulo.costo <= 500;
});

console.log(articulosFiltrados);

// / / / / / / / / MAP

//".Map" agrega a un nuevo array los articulos que cumplen con la condicion
var nombreArticulos = articulos.map(function (articulo) {
  return articulo.nombre;
});

console.log(nombreArticulos);

// / / / / / / / / FIND

//".find" agrega a un nuevo array los articulos que cumplen con la condicion
var encuentraArticulos = articulos.find(function (articulo) {
  return articulo.nombre === "Laptop";
});

console.log(encuentraArticulos);

// / / / / / / / / FOR EACH

//".forEach" no genera un nuevo array. filtra informacion del array existente
articulos.forEach(function (articulo) {
  console.log(articulo.nombre);
});

// / / / / / / / / SOME

// retorna una validacion de verdadero o falso. Se genera un nuevo array
var articulosBaratos = articulos.some(function (articulo) {
  return articulo.costo <= 700;
});

console.log(articulosBaratos);

// / / / / / / / / / / METODOS PARA AGREGAR ELEMENTOS EN UN ARRAY / / / / / / / /

// / / / / / / / / PUSH

// ".push()" nos permite agregar uno o más elementos al final de un array.
let numArray = [1, 2, 3, 4, 5];

function newNum() {
  numArray.push(6, 7);
}

newNum();
console.log(numArray);

// / / / / / / / / / / METODOS PARA ELIMINAR ELEMENTOS EN UN ARRAY / / / / / / / /

// / / / / / / / / SHIFT

// ".shift()" eliminar el primer elemento de un array, es decir, elimina el elemento que esté en el índice 0.
let array = [1,2,3,4];

let shiftArray = array.shift();

console.log(array)

// / / / / / / / / POP

// ".pop()" eliminará el último elemento de un array. En este sentido, si tenemos un array de 5 elementos, pop() eliminará el elemento en el índice 4.

let shiftArray2 = array.pop();

console.log(array);

