function crearTiendas(contenedorID, min, cantidadTiendas){
    //Encontrar contenedor por su id
    let elementoContenedor = document.getElementById(contenedorID)

    //loop para crear tiendas como sean necesarias

    for (let conteoTiendas = 1; conteoTiendas <= cantidadTiendas; conteoTiendas++) {
        //Creaer texto de label para poder llamar a la función
        let textoEtiqueta = 'Tienda '+ conteoTiendas

        //crear tiendas con crearParrafoTienda

        let parrafoTienda = crearParrafoTienda(textoEtiqueta, min)

        //Agregar el parrafo al contenedor
        elementoContenedor.appendChild(parrafoTienda)
    }

}

function crearParrafoTienda(textoLabel, valorMin){
    //Crar etiequetas de parrafo
    let parrafo = document.createElement('P')
    let elementoLabel = document.createElement('LABEL')
    let elementoInput = document.createElement('input')

    elementoLabel.setAttribute('for', textoLabel)
    elementoLabel.textContent = textoLabel + ':'
    elementoInput.setAttribute('type', 'number')
    elementoInput.setAttribute('id', textoLabel)
    elementoInput.setAttribute('min', valorMin)
    elementoInput.setAttribute('value', 0)

    parrafo.append(elementoLabel,elementoInput)

    return parrafo
}

function extraerNumeroDesdeElemento(elemento) {
    let miElemento = document.getElementById(elemento)
    let mitexto = miElemento.value
    let miNumero = Number(mitexto)
    return miNumero

}

function calcular() {
    let ventas = []
    ventas[0] = extraerNumeroDesdeElemento('ventasTienda1')
    ventas[1] = extraerNumeroDesdeElemento('ventasTienda2')
    ventas[2] = extraerNumeroDesdeElemento('ventasTienda3')
    ventas[3] = extraerNumeroDesdeElemento('ventasTienda4')
    ventas[4] = extraerNumeroDesdeElemento('ventasTienda5')
    ventas[5] = extraerNumeroDesdeElemento('ventasTienda6')

    let totalVentas = sumarTotal(ventas)
    let ventaMayor = calcularMayor(ventas)
    let ventaMenor = calcularMenor(ventas)

    let elementoSalida = document.querySelector('#parrafoSalida')
    let mensaje = `El total de ventas ha sido ${totalVentas} la mayor venta ${ventaMayor} y la mínima ${ventaMenor}`
    elementoSalida.textContent = mensaje
}

function sumarTotal(array) {
    let total = 0
    for (let venta of array) {
        total += venta
    }
    return total
}
function calcularMayor(array) {
    let mayorVenta = array[0]
    for (let venta of array) {
        if (venta > mayorVenta) {
            mayorVenta = venta
        }
    }
    return mayorVenta
}
function calcularMenor(array) {
    let menorVenta = array[0]
    for (let venta of array) {
        if (venta < menorVenta) {
            menorVenta = venta
        }
    }
    return menorVenta
}

