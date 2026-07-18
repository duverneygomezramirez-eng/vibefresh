const contenedor = document.getElementById("productos-carrito");

const productos =
JSON.parse(localStorage.getItem("carrito")) || [];

let totalCompra = 0;

let mensaje =
"Hola Vibe Fresh 💖%0A%0AQuiero comprar:%0A";

if (productos.length === 0) {

    contenedor.innerHTML = `
        <h2 class="carrito-vacio">
            Tu carrito está vacío 💔
        </h2>
    `;

document.getElementById("total-carrito").innerText = "$0";

} else {

productos.forEach((producto, indice) => {

const precioNumero =
parseInt(
producto.precio
.replace(/\./g,"")
.replace("$","")
);

totalCompra += precioNumero;

mensaje +=
`• ${producto.nombre} - ${producto.precio}%0A`;

contenedor.innerHTML += `

<div class="fila-carrito">

    <div class="col-producto">

        <img
        src="${producto.imagen}"
        class="producto-img">

        <div class="datos-producto">

            <h3>${producto.nombre}</h3>

            <p>Talla: ${producto.talla || "-"}</p>

        </div>

    </div>

    <div class="col-precio">

        ${producto.precio}

    </div>

    <div class="col-cantidad">

        <button class="cantidad-btn">−</button>

        <span>1</span>

        <button class="cantidad-btn">+</button>

    </div>

    <div class="col-total">

        <button
        class="btn-eliminar"
        onclick="eliminarProducto(${indice})">

            ❌

        </button>

    </div>

</div>

`;

});

document.getElementById("total-carrito").innerText =
`$${totalCompra.toLocaleString("es-CO")}`;


document.getElementById("btn-finalizar")
.addEventListener("click", () => {

    window.open(
        `https://wa.me/573234531562?text=${mensaje}`,
        "_blank"
    );

});

}

function eliminarProducto(indice){

    let carrito =
    JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.splice(indice, 1);

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    location.reload();

}

document.getElementById("vaciar-carrito")
.addEventListener("click", () => {

    localStorage.removeItem("carrito");

    location.reload();

});

const btnSeguir = document.getElementById("seguir-comprando");

if (btnSeguir) {
    btnSeguir.addEventListener("click", () => {
        const ultimaCategoria =
            localStorage.getItem("ultimaCategoria") || "index.html";

        window.location.href = ultimaCategoria;
    });
}


