let boton = document.querySelector('#miBoton')
let lista = document.querySelector('#lista')
let miDiv = document.querySelector('#miDiv')
let miCampo = document.querySelector('#miCampo')
// boton.addEventListener('click', mostrarMensaje)
// miDiv.addEventListener('click', mostrarMensaje)
// boton.addEventListener('mouseover', otroMensaje)

// function mostrarMensaje(){
//     alert('pulsado')
// }

// function otroMensaje(){
//     alert('FLotar')
// }

// function mostrarMensaje(e){
//     console.log(e.target)
//     console.log(e.currentTarget)
// }

// miCampo.addEventListener('keydown', verificarNumero)
// miCampo.addEventListener('keyup', function(e){
//     console.log('tecla soltada')
// })
// miCampo.addEventListener('keypress', function(e){
//     console.log('tecla presionada')
// })
// function verificarNumero(e){
//     if(e.keyCode < 48 || e.keyCode >57){
//         e.preventDefault()
//     }
// }

boton.addEventListener('click', function(){
    lista.style.display = 'block'
})

boton.addEventListener('mouseout', function(){
    lista.style.display = 'none'
})

boton.addEventListener('mouseover', function(){
    lista.style.display = 'block'
})

boton.addEventListener('mousemove', function(e){
  console.log(e.clientX)
})