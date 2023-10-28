var a = "20"
var b = 20.0

console.log("Condicionales: ")

if(a == b){
    console.log("Son iguales")
}
if(a === b){
    console.log("Son iguales y del mismo tipo de dato")
}else{
    console.log("Son iguales pero de otro tipo")
}

console.log("Operaciones del mismo tipo")
var c = 2
var suma = c + 2
console.log(typeof(suma)) // number
console.log(suma) // 4


console.log("Operaciones distinto tipo:")
var suma = b + "patitos"
console.log(typeof(suma)) // string
console.log(a+b) // 2020

console.log("Bucle FOR")
for(var i = 0; i < 10; i++){
    a = a + i
    console.log(a) //200; 20001; ... ; 200123456789
}