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


function calcular() {
    let ventas = []
    let posicionVentas= 0
    let elementosVentas = document.getElementById('itemsTiendas')
    for (let item of elementosVentas.children) {
        let valorVenta = extraerNumeroDesdeElemento(item.children[1])
        ventas[posicionVentas] = valorVenta
        posicionVentas+= 1
    }


    let totalVentas = sumarTotal(ventas)
    let ventaMayor = calcularMayor(ventas)
    let ventaMenor = calcularMenor(ventas)

    for(let item of elementosVentas.children){
        let valorVenta = extraerNumeroDesdeElemento(item.children[1])
        
        item.children[1].classList.remove('mayorVenta')
        item.children[1].classList.remove('menorVenta')
        
        if(valorVenta === ventaMayor){
            item.children[1].classList.add('mayorVenta')
        }
        if(valorVenta === ventaMenor){
            item.children[1].classList.add('menorVenta')
        }
    }
    
    let elementoSalida = document.querySelector('#parrafoSalida')
    let mensaje = `El total de ventas ha sido ${totalVentas} la mayor venta ${ventaMayor} y la mínima ${ventaMenor}`
    elementoSalida.textContent = mensaje
}

function extraerNumeroDesdeElemento(elemento) {
    let mitexto = elemento.value
    let miNumero = Number(mitexto)
    return miNumero

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

let sumaTotal = 0;
 
function automatizarSuma() {
    let contenedor = document.getElementById("contenido");
    
    for (let item of contenedor.children) {
        sumaTotal += Number(item.children[0].value);
    }
}

