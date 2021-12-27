
                                                /*BOTON OSCURDO-CLARO*/

let darkMode; 

if (localStorage.getItem("blackMode")) {
    darkMode = localStorage.getItem("blackMode");
    
}else{
    darkMode = "light"
}
localStorage.setItem("blackMode", darkMode)

$( () =>{
    if(localStorage.getItem("blackMode") == "dark"){
        $("body").addClass("blackMode")
        $(".navbar-nav").addClass("blackMode")
        $(".navbar").addClass("blackMode")
        $("header").addClass("blackMode")
        $(".container-fluid").addClass("blackMode")
        $(".card").addClass("cardOscura")
        $(".nav-link").addClass("tituloDarkMode")
        $(".tituloTienda").addClass("tituloModoOscuro")
        $(".botonCarritoEstilo").addClass("botonCarritoEstiloBlack")
        $(".logoCarritoBarra").addClass("logoCarritoBarraDark")
        $("#botonNegro").hide()
        $("#botonBlanco").show()
    } else{
        $("#botonBlanco").hide()
    }

    $("#botonBlanco").click(() => {
        $("#botonBlanco").hide()
        $("#botonNegro").show()
    
    $("body").removeClass("blackMode")
    $(".navbar-nav").removeClass("blackMode")
    $(".navbar").removeClass("blackMode")
    $("header").removeClass("blackMode")
    $(".container-fluid").removeClass("blackMode")
    $(".card").removeClass("cardOscura")
    $(".nav-link").removeClass("tituloDarkMode")
    $(".tituloTienda").removeClass("tituloModoOscuro")
    $(".botonCarritoEstilo").removeClass("botonCarritoEstiloBlack")
    $(".logoCarritoBarra").removeClass("logoCarritoBarraDark")
    localStorage.setItem("blackMode", "light")
    localStorage.setItem("cardOscura", "light")
    localStorage.setItem("tituloDarkMode", "light")
    localStorage.setItem("tituloModoOscuro", "light")
    })

    $("#botonNegro").click(() => {
        $("#botonNegro").hide()
        $("#botonBlanco").show()
        
    $("body").addClass("blackMode")
    $(".navbar-nav").addClass("blackMode")
    $(".navbar").addClass("blackMode")
    $("header").addClass("blackMode")
    $(".container-fluid").addClass("blackMode")
    $(".card").addClass("cardOscura")
    $(".nav-link").addClass("tituloDarkMode")
    $(".tituloTienda").addClass("tituloModoOscuro")
    $(".botonCarritoEstilo").addClass("botonCarritoEstiloBlack")
    $(".logoCarritoBarra").addClass("logoCarritoBarraDark")
    localStorage.setItem("blackMode", "light")
    localStorage.setItem("cardOscura", "light")
    localStorage.setItem("tituloDarkMode", "light")
    localStorage.setItem("tituloModoOscuro", "light")
    })

})

                                                    /*CARDS*/

let divProductos = document.getElementById(`divProductos`)
let botonCarrito = document.getElementById(`botonCarrito`)
let modalBody = document.getElementById(`modalBody`)
let botonFinalizarCompra = document.getElementById(`botonFinalizarCompra`)

fetch('../productos.json')
    .then(promesa => promesa.json())
    .then(datosProductos =>{
        datosProductos.forEach((productoEnArray, indice) => {
            divProductos.innerHTML += `
            <div class="card" id= "producto${indice}">
                <img src="../img/producto${indice+1}.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3 class="card-title">${productoEnArray.tipo}</h3>
                        <h4 class="card-text"><b>Modelo:</b> ${productoEnArray.modelo}</h4>
                        <h5 class="card-text"><b>Precio:</b> ${productoEnArray.precio}</h5>
                        <button  id="botonAgregar${indice}" class="boton"><img class="carrito" src="../img/carrito.png" alt="carrito"></button>                        
                    </div>
            </div> 
            `        
        });
        datosProductos.forEach((productoEnArray, indice) =>{
            document.getElementById(`botonAgregar${indice}`).addEventListener('click', () => {
                if (productos.find(producto => producto.nombre == productoEnArray.nombre)){
                    let index = productos.findIndex(producto => producto.nombre == productoEnArray.nombre)
                    productos[index].cant++
                    localStorage.setItem('carrito', JSON.stringify(productos))
                } else {
                    let producto = new Producto(productoEnArray.tipo, productoEnArray.modelo, productoEnArray.precio, productoEnArray.stock,productoEnArray.img)
                    productos.push(producto)
                    localStorage.setItem('carrito', JSON.stringify(productos))
                }                
            })
        })
})


                                                    /*CARRITO*/

    botonCarrito.addEventListener('click', () => {
        let productoEnStorage = JSON.parse(localStorage.getItem(`carrito`))
        productoEnStorage.forEach((productoCarrito, indice) => {
        modalBody.innerHTML += `
            <div class="card mb-3" id="productoCarrito${indice} style="max-width: 540px;">
            <div class="row g-0">
            <div class="col-md-4">
                <img src="../img/${productoCarrito.img}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">${productoCarrito.tipo}</h5>
                <p class="card-text"><b>Modelo:</b>${productoCarrito.modelo}</p>
                <p class="card-text"><b>Precio:</b>$${productoCarrito.precio}</p>
                <button id= "botonTacho" class = "btn btn-danger"><img src="../img/tacho.png" alt="tacho"></button>
                </div>
            </div>
            </div>
        </div>    
        ` 
        })
        let botonTacho = document.getElementById('botonTacho')
        botonTacho.addEventListener('click', () => {
        producto.remove()
        })        
    })

// function compraTotal(productosDelStorage) {
//     acumulador = 0;
//     productosDelStorage.forEach((productoCarrito) => {
//         acumulador += productoCarrito.precio * productoCarrito.cant
//     })

//     if(acumulador == 0) {
//         parrafoCompra.innerHTML = ""
//         modalBody.innerHTML = "<p>No hay productos agregados en el carrito </p>" 
//     } else {
//         parrafoCompra.innerHTML = `Importe total $${new Intl.NumberFormat("de-DE").format(acumulador)}`
//     }
   
// }   



botonFinalizarCompra.addEventListener(`click`, () => {
    localStorage.setItem('carrito', JSON.stringify([]))
    swal.fire({
        title:"¡Muchas gracias!",
        text: "Los productos seran enviados en la brevedad",
        icon: `success`,
        confirmButtonText: `Salir`
    })
})

                                                    /*BUSCADOR DE PRODUCTOS*/

$(() => {
    $('#input').keydown((e) => {
        let productoInput = e.target.value
        let productoBuscar = productoInput.toLowerCase()
        let productoEncontrado = producto.filter(producto => producto.tipo.toLowerCase() === productoBuscar)
        console.log(productoEncontrado)
    })
})