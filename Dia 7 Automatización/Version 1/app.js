function extraerNumeroDesdeElemento(elemento) {
    let miElemento = document.querySelector(`#${elemento}`)
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
