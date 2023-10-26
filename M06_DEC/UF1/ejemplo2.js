var a = "10"
var b = 10
var c = 10.0

console.log("Compruebo si 10 es igual a 10.0")
if(b == c){
    console.log("Son iguales")
}else{
    console.log("Son distintos")
}

// Enteros y Float son de tipo Number

if(b === c){
    console.log("Son iguales y del mismo tipo")
}else{
    console.log("Son iguales pero de otro tipo")
}

//Bucle while
while(b > 0){
    a = a + "0"
    b = b -1
    console.log(a)
}

//Switch para las condiciones
switch(c){
    case 10:
        console.log("Vale 10")
        //Si no se pone el BREAK entra en el siguiente caso
    case 9:
        console.log("Vale 9")
        break
    // case X:
    default:  
        console.log("Tiene otro valor")  
}