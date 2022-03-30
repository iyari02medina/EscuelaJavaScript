function newFunction(name, age, country){
    var name = name || "Iyari";
    var age = age || 22;
    var country = country || "Mexico"
    console.log(name);
} 

// es6
function newFunction2(name = "Iyari", age = 25, country = "Mexico"){
    console.log(name,age,country);
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
let lorem ="la Japlin siempre le gusta que alguien la acompañe\n"
+ "porque es una perrita que necesita mucho amor"
console.log(lorem);
//es6
let lorem2= `Otra frase epica esta siendo
escrita en este momento
`;
console.log(lorem2);
// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / 


let person = {
    name: "Iyari",
    age: 25,
    country: "Mexico"
}
//antes
console.log(person.name, person.age)
// es6
let {name,age,country} = person;
console.log(age,country);
// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / 

let team1 = ["Oscar", "Jesica", "Paco"];
let team2 = ["Iyari","Fito","Japlin"];
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
let education2 = ["Trufa",...team1,...team2];
console.log(education2)

