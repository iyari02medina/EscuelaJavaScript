// Remplazar valores en un string 

const string = "JavaScript es lo mejor, voy a dominar el mundo de la web con JavaScript"
const replacedString = string.replace("JavaScript", "Python")
console.log(replacedString);

const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);

// metodos privados 

class Message {
    #show(val) { // se usa un "#" para volver una clase privada 
        console.log(val);
    };
};

const message = new Message();
message.show("Hola!")

// Promise Any para devolver la primera promesa que se resuelve 

const promise1 = new Promise ((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
.then(response => console.log(response));

// referencias de objeto a objeto debil sin que sea recogido por el garbage collector

class anyClass {
    constructor(element) {
        this.ref= new WeakRef (element)
    }
    
}