

function sumar() {
    let numero1 = Number(document.querySelector('#primerValor').value)
    let numero2 = Number(document.querySelector('#segundoValor').value)
    let resultado = numero1 + numero2
    mostrarResultado(resultado)
}
function restar() {
    let numero1 = Number(document.querySelector('#primerValor').value)
    let numero2 = Number(document.querySelector('#segundoValor').value)
    let resultado = numero1 - numero2
    mostrarResultado(resultado)
}
function multiplicar() {
    let numero1 = Number(document.querySelector('#primerValor').value)
    let numero2 = Number(document.querySelector('#segundoValor').value)
    let resultado = numero1 * numero2
    mostrarResultado(resultado)
}
function dividir() {
    let numero1 = Number(document.querySelector('#primerValor').value)
    let numero2 = Number(document.querySelector('#segundoValor').value)
    let resultado = numero1 / numero2
    mostrarResultado(resultado)
}
function raizCuadrada() {
    let numero1 = Number(document.querySelector('#primerValor').value)
    let resultado = Math.sqrt(numero1)
    mostrarResultado(resultado)
}
function potencia() {
    let numero1 = Number(document.querySelector('#primerValor').value)
    let numero2 = Number(document.querySelector('#segundoValor').value)
    let resultado = Math.pow(numero1, numero2)
    mostrarResultado(resultado)
}
function valorAbsoluto() {
    let numero1 = Number(document.querySelector('#primerValor').value)
    let resultado = Math.abs(numero1)
    mostrarResultado(resultado)
}
function valorAbsoluto() {
    let numero1 = Number(document.querySelector('#primerValor').value)
    let resultado = Math.abs(numero1)
    mostrarResultado(resultado)
}
function random() {
    let numero1 = Number(document.querySelector('#primerValor').value)
    let resultado = Math.random(numero1)*100
    mostrarResultado(resultado)
}
function round() {
    let numero1 = Number(document.querySelector('#primerValor').value)
    let resultado = Math.round(numero1)
    mostrarResultado(resultado)
}
function floor() {
    let numero1 = Number(document.querySelector('#primerValor').value)
    let resultado = Math.floor(numero1)
    mostrarResultado(resultado)
}
function ceil() {
    let numero1 = Number(document.querySelector('#primerValor').value)
    let resultado = Math.ceil(numero1)
    mostrarResultado(resultado)
}

function mostrarResultado(resultado) {
    let mostrar = document.querySelector('#resultado')
    mostrar.value = resultado
}

