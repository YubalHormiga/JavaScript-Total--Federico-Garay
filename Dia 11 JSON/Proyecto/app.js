
const url = 'resumen.json'
fetch(url)
    .then(respuesta => {
        return respuesta.json()
    })
    .then(resultado => {
        mostrarResulado(resultado)
    })
    .catch(function (reject) {
        alert(reject)
    })

function mostrarResulado(datos) {

    const { banco, sucursal, titular, nro_cuenta, saldo, cbu, abierto } = datos
    let itemNombre = document.querySelector('#nombre')
    itemNombre.textContent = banco

    let itemSucursal = document.querySelector('#sucursal')
    itemSucursal.textContent = sucursal

    let itemTitular = document.querySelector('#titular')
    itemTitular.textContent = titular

    let itemNro_cuenta = document.querySelector('#cuenta')
    itemNro_cuenta.value = nro_cuenta

    let itemCbu = document.querySelector('#cbu')
    itemCbu.value = cbu

    let itemAbierto = document.querySelector('#abierto')
    itemAbierto.value = abierto

    let saldoDolares = document.querySelector('#saldoDolares')
    saldoDolares.value = `${saldo[0].monto} USD`
    let saldoEuros = document.querySelector('#saldoEuros')
    saldoEuros.value = `${saldo[1].monto} €`
}
