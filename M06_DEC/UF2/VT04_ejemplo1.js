var tamano = document.getElementById("tamano").innerHTML

for(var i=0;i < tamano; i++){
    document.getElementsByTagName("ul")[0].innerHTML += "<li>Creo el elemnto " + i + "</li>"
}

// EL quinto LI lo pongo en rojo
document.getElementsByTagName("li")[5].style.backgroundColor = "red"

