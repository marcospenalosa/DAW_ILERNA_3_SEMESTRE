var listaEnlaces = document.getElementsByTagName("u")
console.log(listaEnlaces)
for (let i = 0; i < listaEnlaces.length; i++){

    console.log(listaEnlaces[i].innerHTML)

    listaEnlaces[i].onclick = function(){
        document.getElementById("eleccion").innerHTML = listaEnlaces[i].innerHTML
        console.log("Cambio")
    }

    listaEnlaces[i].onclick = function(){
        document.getElementById("eleccion").innerHTML = this.innerHTML // this.innerHTML hace referencia a listaEnlaces[i].innerHTML
        console.log("Cambio")
    }
}