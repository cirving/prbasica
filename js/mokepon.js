function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)  
}

function seleccionarMascotaJugador(){

    let hypodoge = document.getElementById("hypodoge").checked
    let capipepo = document.getElementById("capipepo").checked
    let ratigueya = document.getElementById("ratigueya").checked

    let ratigueyo = document.getElementById("ratigueya").checked
    
    if(hypodoge == true){
        alert("Has seleccionado a Hypodoge!")
    }else if(capipepo == true){
        alert("Has seleccionado a Capipepo!")
    }else if(ratigueya == true){
        alert("Has seleccionado a la Ratigueya!")
    }
}

window.addEventListener('load', iniciarJuego)
/*
Necesitamos los elementos cargados antes de poder utilizarlos,
por ello se declara la función que escucha el evento de cuando toda 
la estructura html se ha terminado de cargar. 
*/