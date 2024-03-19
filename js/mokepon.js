let ataqueJugador 
let ataqueMaquina
let mensajeFinal
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)  

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener('click', seleccionarAtaqueFuego)  

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener('click',  seleccionarAtaqueAgua)  

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener('click', seleccionarAtaqueTierra)  
 
}

function seleccionarAtaqueFuego(){
    ataqueJugador = "Fuego"
    seleccionarAtaqueMaquina()

}
function seleccionarAtaqueAgua(){
    ataqueJugador = "Agua"
    seleccionarAtaqueMaquina()
}
function seleccionarAtaqueTierra(){
    ataqueJugador = "Tierra"
    seleccionarAtaqueMaquina()
}

function seleccionarMascotaJugador(){

    let hypodoge = document.getElementById("hypodoge").checked
    let capipepo = document.getElementById("capipepo").checked
    let ratigueya = document.getElementById("ratigueya").checked
    let nombreMascotaJugador = document.getElementById("mascota-jugador")
    let mascotaJugador
    
    if(hypodoge == true){
        alert("¡Has seleccionado a Hypodoge!")
        mascotaJugador = "Hypodoge"
    }else if(capipepo == true){
        alert("¡Has seleccionado a Capipepo!")
        mascotaJugador = "Capipepo"
    }else if(ratigueya == true){
        alert("¡Has seleccionado a la Ratigueya!")
        mascotaJugador = "Ratigueya"
    }else{
        alert("Selecciona una mascota")
    }

    seleccionarMascotaEnemigo()
    return nombreMascotaJugador.innerHTML = mascotaJugador

}

function seleccionarNumeroAleatorio(){
    return Math.floor(Math.random() * 3);
}

function seleccionarMascotaEnemigo(){

    let nombreMascotaEnemigo  = document.getElementById("mascota-enemigo")
    let mascotaEnemigo
    let opcion = seleccionarNumeroAleatorio()

   // alert(opcion)
    if(opcion == 1){
        mascotaEnemigo = "Hypodoge"
    }
    else if(opcion == 2){
        mascotaEnemigo = "Capipepo"
    }
    else{
        mascotaEnemigo = "Ratigueya"
    }

    
    return nombreMascotaEnemigo.innerHTML = mascotaEnemigo
}

function seleccionarAtaqueMaquina(){

    let opcion = seleccionarNumeroAleatorio()
    
    if(opcion == 1){
        ataqueMaquina = "Fuego"
    }
    else if(opcion == 2){
        ataqueMaquina = "Agua"
    }
    else{
        ataqueMaquina = "Tierra"
    }

    evaluarBatalla()

    return ataqueMaquina
}

function evaluarBatalla(){

    let SpanVidasJugador
    let SpanVidasEnemigo

    if(ataqueJugador == ataqueMaquina){
            mensajeFinal = "EMPATARON"

    }else if(ataqueJugador == "Fuego" && ataqueMaquina ==  "Tierra"){
            mensajeFinal = "GANASTE"
            vidasEnemigo--
            SpanVidasEnemigo  = document.getElementById("vidas-enemigo")
            SpanVidasEnemigo.innerHTML = vidasEnemigo

    }else if(ataqueJugador == "Agua" && ataqueMaquina == "Fuego"){
            mensajeFinal = "GANASTE"
            vidasEnemigo--
            SpanVidasEnemigo  = document.getElementById("vidas-enemigo")
            SpanVidasEnemigo.innerHTML = vidasEnemigo

    }else if(ataqueJugador == "Tierra" && ataqueMaquina == "Agua"){
            mensajeFinal = "GANASTE"
            vidasEnemigo--
            SpanVidasEnemigo  = document.getElementById("vidas-enemigo")
            SpanVidasEnemigo.innerHTML = vidasEnemigo

    }else{
            mensajeFinal = "PERDISTE"
            vidasJugador--
            SpanVidasJugador  = document.getElementById("vidas-jugador")
            SpanVidasJugador.innerHTML = vidasJugador
         
    }
    crearMensaje()
}

function crearMensaje(){

    let parrafoMensajes = document.getElementById("mensajes");
    let parrafo = document.createElement("p");
    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", tu enemigo atacó con " + ataqueMaquina + ", " + mensajeFinal;
    parrafoMensajes.appendChild(parrafo)

}

window.addEventListener('load', iniciarJuego)
/*
Necesitamos los elementos cargados antes de poder utilizarlos,
por ello se declara la función que escucha el evento de cuando toda 
la estructura html se ha terminado de cargar. 
*/
