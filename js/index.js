// Lectura de archivo JSON con los datos de los productos en oferta.
let productosEnOferta = []

fetch("./js/productosEnOferta.json")
    .then(response => response.json())
    .then(data => {
        productos = data
        // La primera vez que cargue la página, cargamos todos los productos.
        cargarProductosEnOferta(productos)
    })
    .catch(error => console.log("Error: " + error))

// Lectura de archivo JSON con los datos de los productos nuevos.
let productosNuevos = []

fetch("./js/productosNuevos.json")
    .then(response => response.json())
    .then(data => {
        productos = data
        // La primera vez que cargue la página, cargamos todos los productos.
        cargarProductosNuevos(productos)
    })
    .catch(error => console.log("Error: " + error))

// Elementos del DOM.
const contenedorOfertas = document.getElementById("contenedor-ofertas")
const contenedorNuevos = document.getElementById("contenedor-nuevos")

// Cargamos los productos que están en oferta.
function cargarProductosEnOferta(listaProductosEnOferta) 
{
    contenedorOfertas.innerHTML = ""

    listaProductosEnOferta.forEach(producto => {
        const divProducto = document.createElement("div")
        
        divProducto.classList.add("producto")

        divProducto.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}" />
            <div class="producto-detalles">
                <h3 class="producto-descripcion">${producto.descripcion}</h3>
                <h4 class="producto-cantidad">${producto.cantidad}</h4>
                <p class="producto-precio">
                    <span class="producto-precio-anterior">${producto.precio} €</span> 
                    <span class="producto-precio-actual">${calcularPrecioConDescuento(producto.precio, producto.descuento)} €</span>
                </p>
                <button class="producto-agregar" id="${producto.id}">Añadir al carrito</button>
            </div>
        `

        contenedorOfertas.append(divProducto)
    })

    //actualizarListaDeBotonesAgregar();
}

function calcularPrecioConDescuento(precioOriginal, descuento)
{
    const rebaja = precioOriginal * (descuento / 100)

    return (precioOriginal - rebaja).toFixed(2)
}

// Cargamos las novedades.
function cargarProductosNuevos(listaProductosNuevos)
{
    contenedorNuevos.innerHTML = ""

    listaProductosNuevos.forEach(producto => {
        const divProducto = document.createElement("div")
        
        divProducto.classList.add("producto")

        divProducto.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}" />
            <div class="producto-detalles">
                <h3 class="producto-descripcion">${producto.descripcion}</h3>
                <h4 class="producto-cantidad">${producto.cantidad}</h4>
                <p class="producto-precio">
                    <span class="producto-precio-actual">${producto.precio} €</span> 
                </p>
                <button class="producto-agregar" id="${producto.id}">Añadir al carrito</button>
            </div>
        `

        contenedorNuevos.append(divProducto)
    })

    //actualizarListaDeBotonesAgregar();
}