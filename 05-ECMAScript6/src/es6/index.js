function newFunction(name, age, country) {
  var name = name || "Iyari";
  var age = age || 22;
  var country = country || "Mexico";
  console.log(name);
}

// es6
function newFunction2(name = "Iyari", age = 25, country = "Mexico") {
  console.log(name, age, country);
}
newFunction();
newFunction2("japlin", 10, "Mexico");
// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /

// antes
let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);
// es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);
// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /

// antes
let lorem =
  "la Japlin siempre le gusta que alguien la acompañe\n" +
  "porque es una perrita que necesita mucho amor";
console.log(lorem);
//es6
let lorem2 = `Otra frase epica esta siendo
escrita en este momento
`;
console.log(lorem2);
// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /

let person = {
  name: "Iyari",
  age: 25,
  country: "Mexico",
};
//antes
console.log(person.name, person.age);
// es6
let { name, age, country } = person;
console.log(age, country);
// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /

let team1 = ["Oscar", "Jesica", "Paco"];
let team2 = ["Iyari", "Fito", "Japlin"];
// antes
let education1 = [
  "Trufa",
  "Oscar",
  "Jesica",
  "Paco",
  "Iyari",
  "Fito",
  "Japlin",
];
console.log(education1);
// es6
let education2 = ["Trufa", ...team1, ...team2];
console.log(education2);
// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
{
  var globalVar = "Global Var"; // se define la variable en scope local y global
}
console.log(globalVar); //Global Var

{
  let globalLet = "Global Let"; //solo se define la varible en el scope local
  console.log(globalLet); // Global Let
}
console.log(globalLet); // globalLet is not defined

var a = "b";
console.log(a); // b
a = "c"; // a "var" se le puede reasignar valores
console.log(a); // c

const c = "d";
console.log(c); // d
c = "f"; // a "const" no se le pueden reasignar valores
console.log(c); // TypeError

let perro = "Fito";
console.log(perro);
perro = "Japlin"; // "let" puede reasignar valores
console.log(perro);
// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /

let nombre = "Iyari";
let edad = 25;

// es5
obj = { nombre: nombre, edad: edad };
console.log(obj);

// es6
obj2 = { nombre, edad };
console.log(obj2);
// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /

const names = [
  { name: "Iyari", age: 25 },
  { name: "Nico", age: 10 },
];

// es5
let listOfNames = names.map(function (item) {
  console.log(item.name);
});

// es6
let listOfNames2 = names.map((item) => console.log(item.name));

const square = (num) => num * num;
// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("Hey");
    } else {
      reject("Ups");
    }
  });
};

helloPromise()
    .then((response) => console.log(response))
    .then (() => console.log("Hola"))
    .catch(error => console.log(error))
    .then(() => console.log("Lo siento mi chavo"));

// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}
const calc = new calculator();
console.log(calc.sum(2,2));

