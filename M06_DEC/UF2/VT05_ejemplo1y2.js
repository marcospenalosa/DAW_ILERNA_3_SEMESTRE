// Forma directa de crear un objeto
var brian = {
    nombre: "Brian",
    numPatas: 4,
    raza: "beagle",
    ladra: function(){
        console.log("Hola Stewie")
    }
}

// Forma indirecta de crear un objeto
var ayudante = new Object()
ayudante.nombre = "Pequeño ayudante de Santa Claus"
ayudante.numPatas = 4
ayudante.raza = "galgo"
ayudante.ladra = function() {
    console.log("Guau")
}

// Creando una clase
function Perro (nombre, numPatas, raza, ladrido){
    this.nombre = nombre
    this.numPatas = numPatas
    this.raza = raza
    this.ladra = function() {
        console.log(ladrido)
    }
}

var perrudines = new Perro("Perrudines", 2, "ratonero", "Guau Guau Guau")

console.log(brian.nombre)
brian.ladra()
console.log(ayudante.nombre)
ayudante.ladra()
console.log(perrudines.nombre)
perrudines.ladra()
console.log("------------------------------------------------------------------------------")

var bet = new Perro("Beethoven", 4, "sanbernardo", "GUUF")

console.log(perrudines.color)
console.log(bet.color)
console.log(ayudante.color)
// La propiedad color no existe en los objetos creados
// Con prototype puedo añadir o eliminar propiedades de los objetos 
Perro.prototype.color = "blanco" //todos los perros son blancos, incluso los nuevos
var perroNuevo = new Perro("Nuevo",4, "pastoraleman", "Guau Guau")
console.log(perroNuevo.color) // blanco

// Se puede usar __proto__ para acceder a las propiedades
perrudines.__proto__.color = "Negro"
bet.color = "Marrón"
ayudante.color = "Canela"
console.log("------------------------------------------------------------------------------")
console.log(perrudines.color)
console.log(bet.color)
console.log(ayudante.color)



