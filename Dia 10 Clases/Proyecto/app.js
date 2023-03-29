class Animal {
    constructor(nombre, peso, edad) {
        this._nombre = nombre
        this._peso = peso
        this._edad = edad
    }
    //!Tambien se puede crear el método así lo mismo con Perro,Gato y Conejo
    // informacion(){
    //     return `${this._nombre} - ${this._peso} ${this._edad}`
    // }
}

//!Metodo
Animal.prototype.informacion = function () {
    return `${this._nombre} - ${this._peso} ${this._edad}`
}

class Perro extends Animal {
    constructor(nombre, peso, edad, raza) {
        super(nombre, peso, edad)
        this._raza = raza
    }
}
Perro.prototype.informacion = function () {
    return `Nombre:${this._nombre} - Peso: ${this._peso}Kg - Edad:${this._edad} - Raza:${this._raza}`
}

class Gato extends Animal {
    constructor(nombre, peso, edad, sexo) {
        super(nombre, peso, edad)
        this._sexo = sexo
    }
}
Gato.prototype.informacion = function () {
    return `Nombre:${this._nombre} - Peso:${this._peso}Kg - Edad:${this._edad} - Sexo:${this._sexo}`
}

class Conejo extends Animal {
    constructor(nombre, peso, edad, color) {
        super(nombre, peso, edad)
        this._color = color
    }
}

Conejo.prototype.informacion = function () {
    return `Nombre:${this._nombre} - Peso:${this._peso}Kg - Edad:${this._edad} - Color:${this._color}`
}

let perro1 = new Perro('Lua', 4, 18, 'Maltes')
let gato1 = new Gato('Lili', 3, 8, 'Hembra')
let conejo1 = new Conejo('Kua', 2, 1, 'Blanco')

let animales = [perro1, gato1, conejo1]

function listar() {
    let mostrar = document.querySelector('#mostrar')
    for (const animal of animales) {
        let item = document.createElement('LI')
        item.innerHTML = animal.informacion()
        mostrar.appendChild(item)
    }
}
