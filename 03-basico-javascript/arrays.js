var frutas = ["manzanas", "platano", "cereza", "fresa"]
var masFrutas = frutas.push("uvas") // ".push" agrega un elemento al final del array
console.log(frutas) // ["manzanas", "platano", "cereza", "fresa", "uvas"]

var ultimo = frutas.pop("uvas"); // ".pop" elimina el ultimo elemento del array 
console.log(frutas) // ["manzanas", "platano", "cereza", "fresa"]

var nuevaLongitud = frutas.unshift("pera"); // ".unshift" agrega un elemento al inicio del array 
console.log(frutas)

var borrarFruta = frutas.shift("pera"); // ".shift" borra el primer elemento de un array
console.log(frutas)


var posicion = frutas.indexOf("cereza"); // ".indexof" nos dice la posicion que tiene un elemento en un array 
console.log(posicion) // 2
