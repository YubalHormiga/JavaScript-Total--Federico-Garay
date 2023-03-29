function Automovil(marca, modelo, color, anio, titular) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular
}
//*INSTANCIAS
let automovi1 = new Automovil('Toyota', 'Craf', 'amarillo', 1975, 'Yubal')
let automovi2 = new Automovil('Fiat', 'Punto', 'azul', 1975, 'Pedro')
let automovi3 = new Automovil('Citroen', 'C3', 'rojo', 1975, 'Manuel')

let automoviles = [automovi1, automovi2, automovi3]

//*MÉTODOS
Automovil.prototype.venderAutomovil = function (nuevoTitular) {
    this.titular = nuevoTitular
}

Automovil.prototype.encender = function () {
    alert("El automovil esta en marcha")
}

Automovil.prototype.verAuto = function() {
    return `${this.marca} ${this.modelo} - ${this.color} - ${this.anio} - ${this.titular}`
}

function mostrar() {
    let mostrar = document.querySelector('#listar')
    if (automoviles.length) {
        for (const vehiculo of automoviles) {

            let item = document.createElement('LI')
            item.innerHTML = vehiculo.verAuto()
            mostrar.appendChild(item)
            //!Otra forma
            // mostrar.innerHTML += `<li>${vehiculo.verAuto()}</li>`
        }
        
    } else {
        let mostrar = document.querySelector('#listar')
        mostrar.innerHTML += `<li>'No hay vehiculos'</li>`
    }        
    
}