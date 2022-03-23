var miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  annio: 2020,
  detalleDelAuto: function(){
      console.log("Auto " + this.modelo +" " + this.annio);
  }
};
console.log(miAuto.marca) // llamar un elemento dentro de un objeto
miAuto.detalleDelAuto();


// / / / / / / / / / / / / / / Funcion Constructora / / / / / / / / / / / /

function auto(marca, modelo, annio) {
    this.marca= marca;
    this.modelo = modelo;
    this.annio = annio;
}
var autoNuevo = new auto("Test", "Model 3", 2020);
var autoNuevo2 = new auto("BMW", "z4", 2021);
var autoNuevo3 = new auto("Prshe", "911", 2021);

// / / / / // / / / / // / / / / RETO // / / / / // / / / / // / / / / // / / / /

function auto(MARCA, MODELO, ANNIO) {
  this.marca = MARCA;
  this.modelo = MODELO;
  this.annio = ANNIO;
}
var autos = [];
for (let i = 0; i < 30; i++) {
  var marca = prompt("Ingresa la marca del auto");
  var modelo = prompt("Ingresa el modelo del auto");
  var annio = prompt("Ingresa el año del auto");
  autos.push(new auto(marca, modelo, annio));
}

for (let i = 0; i < autos.length; i++) {
  console.log(autos[i]);
}