// Damos la funcionalidad al botón pulsar

// Como el botón pulsar no tiene ID, lo tengo que selecionar por el tag HTML, y al haber dos botones
// tengo que seleccionar el primero (índice 0)
console.log(document.getElementsByTagName("button"))

document.getElementsByTagName("button")[0].onclick = function(){

    // Guardamos el número de elementos a crear
    // Al ser un input, el "valor" a recuperar se encuentra en value, no innerHTML
    var numeroElementos = parseInt(document.getElementsByName("valor")[0].value)
    
    var texto = "<ul>"
    for(i = 0; i < numeroElementos; i++){
        var numeroAleatorio = Math.round(Math.random() * 10, 0)
        texto = texto + "<li>" + numeroAleatorio + "</li>"
    }
    texto = texto + "</ul>"
    document.getElementById("resultado").innerHTML = texto
}

// Agrego la funcionalidad al botón colorear
document.getElementById("colorear").onclick = function(){
    // Guardo todos los li
    var listaNumeros = document.getElementsByTagName("li")

    for(var i = 0; i < listaNumeros.length; i++){
        if(parseInt(listaNumeros[i].innerHTML) % 2 === 0){
            listaNumeros[i].style.backgroundColor = "red"
        }
    }
}



