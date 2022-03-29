const lista1 = [1, 2, 1, 3, 4, 5, 6, 3, 2, 8, 7, 1, 5, 9, 8, 7, 2];

const lista1Count = {};

lista1.map(function (elemento) {
  if (lista1Count[elemento]) {
    lista1Count[elemento] += 1;
  } else {
    lista1Count[elemento] = 1;
  }
});

const lista1Array = Object.entries(lista1Count).sort(
  // "Object.entries()" devuelve una matriz de pares propios de una propiedad enumerable [key, value] de un objeto dado,
  function (elementoA, elementoB) {
    return elementoA[1] - elementoB[1];
  }
);

const moda = lista1Array[lista1Array.length - 1];