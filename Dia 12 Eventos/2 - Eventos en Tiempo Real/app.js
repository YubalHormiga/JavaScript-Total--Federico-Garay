let socket = new WebSocket('ws://localhost:8080')
let mensajeIngresado = document.querySelector('#mensajeIngresado')
let botonEnviar = document.querySelector('#botonEnviar')

function mostrarMensaje( contenido ){
   let contenedorMensajes = document.querySelector('#mensajeChat')
   let elementoMensaje = document.createElement('p') 
   elementoMensaje.innerText = contenido
   contenedorMensajes.appendChild(elementoMensaje)
}

botonEnviar.onclick = function(){
    let mensaje = mensajeIngresado.value
    mostrarMensaje(mensaje)
    socket.send(mensaje)
}

socket.onmessage = function(event){
    let mensaje = event.data
    mostrarMensaje(mensaje)
}