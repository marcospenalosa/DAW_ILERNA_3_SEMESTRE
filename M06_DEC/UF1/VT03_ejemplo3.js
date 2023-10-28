//Selecciono los elementos
var botonInsertar = document.getElementById("insertar") // El botón insertar
var contenidoCampoTexto = document.getElementsByName("nombre")[0] // El input
var textoFijo = document.getElementsByClassName("insertado")[0] // El "p"

// Añado las funcionalidades a los botones

// Al pulsar en el botón insertar añado el texto del input en el "p"
botonInsertar.onclick = function(){
    textoFijo.innerHTML = contenidoCampoTexto.value
}

//EN JS PUEDO LLAMAR A LOS ELEMENTOS HTML POR EL ID SIN TENER QUE USAR getElementById()

grande.onclick = function(){
    modificarTamano("+")
}

pequeno.onclick = function(){
   modificarTamano("-")
}

function modificarTamano(operacion){
    var tamano = textoFijo.style.fontSize // 200%
    tamano = tamano.substring(0, tamano.length - 1) // 200
    if(operacion == "+"){
        tamano = parseInt(tamano) + 5 // 205
    }else{
        tamano = parseInt(tamano) - 5 // 195
    }
    tamano = tamano + "%" // 205% | 195%
    textoFijo.style.fontSize = tamano
    console.log(tamano)
}