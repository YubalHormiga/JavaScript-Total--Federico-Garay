let empleados = []

function Empleado(legajo, nombre, apellido, date, cargo) {
    this.legajo = legajo
    this.nombre = nombre
    this.apellido = apellido
    this.date = date
    this.cargo = cargo
}

function agregar() {
    //capturamos datos
    let legajo = document.querySelector('#legajo').value
    let nombre = document.querySelector('#nombre').value
    let apellido = document.querySelector('#apellido').value
    let date = document.querySelector('#date').value
    let cargo = document.querySelector('#cargo').value


    let nuevoEmpleado = new Empleado(legajo, nombre, apellido, date, cargo)

    empleados = [...empleados, nuevoEmpleado]

    alert('Empleado cargado')

    limpiarHTML()

}

function listar(){

    let mostrarListado = document.querySelector('#mostrarListado')
    
    for (const array of empleados) {
        for (const atributo in array) {
           let datosEmpleado = `${atributo}:${array[atributo]}`
           mostrarListado.innerHTML += `<li>${datosEmpleado}</li>`
           mostrarListado.classList.add('listado')
        }
    }
}
function limpiarHTML() {
    document.querySelector('#legajo').value = ''
    document.querySelector('#nombre').value = ''
    document.querySelector('#apellido').value = ''
    document.querySelector('#date').value = ''
    document.querySelector('#cargo').value = ''
   }
    