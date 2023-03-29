let selector = document.querySelector('#miSelector')
let input = document.querySelector('#miInput')
let boton = document.querySelector('#miBoton')
let lista = document.querySelector('#miListado')

let archivo = 'peliculas.json'

//Listener

selector.addEventListener('change', cambiarArchivo)
selector.addEventListener('mensajeModo', mensajeModo)
input.addEventListener('keydowm', veryficarInput)
boton.addEventListener('click', buscar)

//funciones
function cambiarArchivo() {
    archivo = selector.value
    let evento = new CustomEvent('mensajeModo')
    selector.dispatchEvent(evento)
}

function mensajeModo() {
    console.log('cambiando')
    alert(`El archivo de busqueda ahora es ${selector.value}`)
}

function veryficarInput(e) {
    if (e.keyCode < 65 || e.keyCode > 90 && e.keyCode != 32 && e.keyCode != 8) {
        e.preventDefault()
    }
}

function buscar() {
    lista.innerHTML = ''
    fetch(archivo)
        .then(respuesta => {
            return respuesta.json()
        })
        .then(resultado => {
            salida(resultado)
        })
}
function salida(datos) {
    for (const item of datos.data) {
        if (item.nombre.startsWith(input.value.toUpperCase())) {
            let p = document.createElement('p')
            p.id = item.nombre
            p.innerHTML = item.sinopsis
            p.style.display = 'none'
            

            let li = document.createElement('li')
            li.innerHTML = item.nombre
            li.addEventListener('mouseover', function(){
                let p = document.getElementById(item.nombre)
                p.style.display = 'block'
            })
            li.addEventListener('mouseout', function(){
                let p = document.getElementById(item.nombre)
                p.style.display = 'none'
            })
            li.appendChild(p)
            lista.appendChild(li)

        }
    }
}