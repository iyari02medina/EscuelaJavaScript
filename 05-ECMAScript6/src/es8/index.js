// transformar un objeto en una matriz de arrays

const data = {
    frontend: "Iyari",
    backend: "Japlin",
    design: "Fito"
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length)

// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
 // devolver los valores de un objeto a un arreglo 
/* 
 const data = {
   frontend: "Iyari",
   backend: "Japlin",
   design: "Fito",
 }; */

const values = Object.values(data);
console.log(values);
console.log(values.length);
// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /

//agregar elementos al inicio y final

const string = "hello";
console.log(string.padStart(8,"hi "))
console.log(string.padEnd(12,"----"))
// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /


// Async Await

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout (() => resolve ("Hello World"),3000)
        : reject (new Error ("Test error"))
    })
};

const helloAsync = async() => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error){
        console.log(error)
    }
};

anotherFunction();
