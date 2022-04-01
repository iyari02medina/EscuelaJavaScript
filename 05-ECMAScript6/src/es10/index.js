let array = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
console.log(array.flat(2));

// Flat map

let array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap(value => [value, value * 2]));

// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / 

// Eliminar los espacios en blancos de un string 

let hello = "          Hello World";
console.log(hello);
console.log(hello.trimStart());

// Eliminar los espacios al final del texto 

let hello3 = "Hello World         ";
console.log(hello3);
console.log(hello3.trimEnd())
// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / 

// Transformar clave valor en un objeto 

let enties = [
  ["name", "Iyari"],
  ["age", "32"],
];
console.log(Object.fromEntries(enties));

// acceder a descripciones 

let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);