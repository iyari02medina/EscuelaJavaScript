// extraer las propiedades de un objeto que aun no se a construido

const obj = {
    name: "Iyari",
    age:25,
    country: "Mx"
}

let {name,...all} = obj;
console.log(name,all)

// unir objetos

const obj1 = {
    name: "iyari",
    age: 25
}

const obj2 = {
    ...obj1,
    country: "Mx"
}
console.log(obj2)

// promesas con un finalizador 

const helloWorld = () => {
    return new Promise ((resolve, reject) =>{
        (true)
        ? setTimeout(() => resolve ("Hello World"), 3000)
        : reject (new Error ("Test error"))
    });
};

helloWorld()
    .then( response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("Finalizado"))

// agrupar bloques de regex y acceder a ellos 

const regexData = /([0-9]{4}-[0-9]{2}-[0-9]{2})/

const match = regexData.exec("2022-03-31");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year,month,day)

//
