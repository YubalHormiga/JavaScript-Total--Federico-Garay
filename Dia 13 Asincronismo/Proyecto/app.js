function contenido() {
    spinner()
    CotizacionDolarEuro()
    cotizacionBit()
    cotizacionDolarPesoArgentino()
    titulo()
    
    
}

//!API DOLAR- EURO
function CotizacionDolarEuro() {
    const urlEuro = "https://open.er-api.com/v6/latest/USD"
    
    fetch(urlEuro)
    .then((respuesta) => {
        return respuesta.json()
    })
    .then((resultado) => {
        
        contizacionEuro(resultado)
    })
    
}

//! API DOLAR & BITCOIN
async function cotizacionBit(){
const urlBit = 'https://api.coindesk.com/v1/bpi/currentprice.json'
    let respuesta = await fetch(urlBit)
    let datos = await respuesta.json()
    contizacionBit(datos)

}
//!API DOLAR- PESO ARGENTINO
async function cotizacionDolarPesoArgentino() {
    const urlPeso = "https://open.er-api.com/v6/latest/ARS"

    let respuesta = await fetch(urlPeso)
    let datos = await respuesta.json()

    cotizacionPesoArgentino(datos)


}


function contizacionEuro(resultado) {
    let cambioEuro = resultado.rates['EUR']
    const cotizacionEuro = document.querySelector('#euro')
    cotizacionEuro.textContent = `El cambio USD & EUR es de ${cambioEuro}`
}
function contizacionBit(resultado) {
    let cambioBit = resultado.bpi['USD'].rate
    const cotizacionBit = document.querySelector('#bitcoin')
    cotizacionBit.textContent = `El cambio USD & Bitcoin es de ${cambioBit}`
}


function cotizacionPesoArgentino(resultado) {
    let cambioPeso = resultado.rates['AFN']
    const cotizacionPeso = document.querySelector('#pesoArgentino')
    cotizacionPeso.textContent = `El cambio USD & ARS es de ${cambioPeso}`
}



function spinner() {
    
    let spinner = document.querySelector('#imagen')

    spinner.innerHTML = `
    <div class="sk-chase">
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
</div>

    
    `
}

function titulo(){
    let titulo = document.querySelector('#titulo')
    titulo.textContent = 'Cotizaciones'
}
