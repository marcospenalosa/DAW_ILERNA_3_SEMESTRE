// Mostramos la fecha
var fechaActual = new Date;
// Para mostrar el mes escrito y en el idioma toLocaleString("es-ES", {month: "long"})
document.getElementById("fecha").innerHTML = fechaActual.getDate() + " de " + fechaActual.toLocaleString("es-ES", {month: "long"}) + " de " + fechaActual.getFullYear();

//Mostramos el segundo actual
var segundoActual = fechaActual.getSeconds()
document.getElementById("segundos").innerHTML = segundoActual

// Math contiene PI
var resultado = Math.round(segundoActual * Math.PI)
document.getElementById("resultado").innerHTML = resultado

// Vamos a hacer que cambie el color del fondo de p según par o impar
var color;

function paridad(valor){
    if(valor % 2 === 0){
        color = "red"
        return "par"
    }else{
        color = "blue"
        return "impar"
    }
}

// Mostramos el texto de la paridad y cambiamos el color de fondo
document.getElementById("paridad").innerHTML = paridad(resultado)
document.getElementsByTagName("p")[0].style.backgroundColor = color
