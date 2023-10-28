var listaValores = document.getElementsByTagName("td")

var resultado = 0

for(var i = 0; i < listaValores.length; i++ ){
    console.log(listaValores)
    resultado = resultado + parseInt(listaValores[i].innerHTML) // Convierto el string en número para poder sumarlo
}

var parrafo = document.getElementsByTagName("p")

parrafo[0].innerHTML = "El resultado final es " + resultado + " y tiene " + String(resultado).length + " caracteres."

