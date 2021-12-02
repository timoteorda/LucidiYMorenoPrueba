/*TITULO DE LA TIENDA*/

$(() => {
$('#tituloPrincipal').prepend(`
    <h1 id="parrafo1" class="tituloArranques">Bienvenido a nuestra tienda virtual</h1>
    `
)
})


/*CARTAS DE LA TIENDA*/

let producto = []

class Producto {
    constructor(tipo, modelo, precio, stock){
        this.tipo = tipo
        this.modelo = modelo
        this.precio = precio
        this.stock = stock
    }
}

/*MOTORES ELECTRICOS*/

const w12 = new Producto("Motor eléctrico", "W12", 25000, 20)
producto.push(w12)
const w21 = new Producto ("Motor eléctrico", "W21", 33000, 20)
producto.push(w21)
const w21Xdb = new Producto("Motor eléctrico", "W1Xdb", 36000, 20)
producto.push(w21Xdb)
const w22 = new Producto("Motor eléctrico", "W22", 40000, 20)
producto.push(w22)

/*VARIADORES DE FRECUENCIA*/

const cfw300 = new Producto ("Variador de frecuencia", "CFW300", 28000, 15)
producto.push(cfw300)
const cfw500 = new Producto ("Variador de frecuencia", "CFW500", 32000, 15)
producto.push(cfw500)
const cfw11 = new Producto ("Variador de frecuencia", "CFW11", 35000, 15)
producto.push(cfw11)

/*ARRANQUES SUAVES*/

const ssw05 = new Producto ("Arranques suave", "SSW05", 25000, 15)
producto.push(ssw05)
const ssw07 = new Producto ("Arranques suave", "SSW07", 29000, 15)
producto.push(ssw07)
const ssw08 = new Producto ("Arranques suave", "SSW08", 34000, 15)
producto.push(ssw08)

/*ELECTROBOMBAS*/

const presurizadora = new Producto("Electrobomba", "Presurizadora", 20000, 10)
producto.push(presurizadora)
const circuladoraCalefaccion = new Producto("Electrobomba", "Circuladora para calefacción", 22000, 10)
producto.push(circuladoraCalefaccion)
const periferica = new Producto("Electrobomba", "Electrobomba periférica", 23500, 10)
producto.push(periferica)
const centrifuga = new Producto("Electrobomba", "Electrobomba Centrífuga", 24000, 10)
producto.push(centrifuga)
const centrifugaAltoCaudal = new Producto("Electrobomba", "Centrífuga de alto caudal", 28000, 10)
producto.push(centrifugaAltoCaudal)
const centrifugaAltaPresion = new Producto("Electrobomba", "Centrífuga de alta presión", 32000, 10)
producto.push(centrifugaAltaPresion)
const centrifugaVertical = new Producto("Electrobomba", "Centrífuga vertical", 26000, 10)
producto.push(centrifugaVertical)
const desagoteDomestico = new Producto("Electrobomba", "Desagote doméstico", 20000, 10)
producto.push(desagoteDomestico)
const centrifugaAcero = new Producto("Electrobomba", "Centrifuga de acero inoxidable", 40000, 10)
producto.push(centrifugaAcero)
const sumergiblePozo = new Producto("Electrobomba", "Sumergible pozo profundo", 20000, 10)
producto.push(sumergiblePozo)
const desagoteTriturador = new Producto("Electrobomba", "Desagote con triturador", 24000, 10)
producto.push(desagoteTriturador)

/*CONTROL Y PROTECCION*/



localStorage.setItem(`producto`, JSON.stringify(producto))

/*CARDS*/

let divProductos = document.getElementById(`divProductos`)

producto.forEach((producto, indice) => {
    divProductos.innerHTML += `
    <div class="card" id= "producto${indice + 1}">
        <img src="../img/producto${indice + 1}.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h3 class="card-title">${producto.tipo}</h3>
                <h4 class="card-text">Modelo: ${producto.modelo}</h4>
                <h5 class="card-text">Precio: $${producto.precio}</h5>
                <a id="botonAgregar${indice+1}" class="btn btn-primary">Añadir a carrito</a>
                <a id="botonEliminar${indice+1}" class="btn btn-danger">Eliminar</a>
            </div>
    </div> 
    `
})


producto.forEach((producto, indice) =>{
    let botonAgregar = document.getElementById(`botonAgregar${indice+1}`)
    function agregarProducto (){
        let idProducto = document.getElementById(`producto${indice+1}`)
        idProducto.add;
        console.log(`Usted a añadido ${producto.tipo} ${producto.modelo} al carrito`)
    }
    botonAgregar.onclick = agregarProducto
})

producto.forEach((producto, indice) =>{
    let botonEliminar = document.getElementById(`botonEliminar${indice+1}`)
    function eliminarProducto (){
        let idProducto = document.getElementById(`producto${indice+1}`)
        idProducto.remove;
        console.log(`Usted a eliminado ${producto.tipo} ${producto.modelo} del carrito`)
        divProductos.removeChild(document.getElementById(`producto${indice + 1}`))
        producto.splice(indice + 1)
    }
    botonEliminar.onclick = eliminarProducto
})


let input = document.getElementById("input")

input.addEventListener(`input`, (e) => {
    input.textContent= e.target.value
    let busqueda = producto.find(producto => producto.tipo.includes(e.target.value))
    console.log(busqueda)
})

