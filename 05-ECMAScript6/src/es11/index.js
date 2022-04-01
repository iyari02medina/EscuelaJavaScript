// importacion de elementos de forma dinamica 
const button = document.getElementById("btn");

button.addEventListener("click", async function(){
    const module = await import("./file.js");
    module.hello();
});

// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / 

// numeros grandes

const aBigNumber = 900716523098798798746n;
const anotherBigNumber = BigInt(900716523098798798746);

console.log (aBigNumber);
console.log(anotherBigNumber);

// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / 

// Resolver una promesa hasta que todas se hallan complido o rechazado en una serie de objetos 

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response));
// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / 

// Global This

console.log(window);
console.log(globalThis);


// valores nulos 

const foo = null ?? "default string";
console.log(foo)

// Accedar a arreglos y objetos 

const user = {};

console.log(user?.profile?.email); // asi el codigo no rompe la aplicacion

if(user?.profile?.email){
    console.log("email");
} else {
    console.log("Fail")
}
