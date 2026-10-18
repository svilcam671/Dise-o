//variables
let carrito = [];
let botones = document.querySelectorAll(".añadirCarrito");

//funcion para añadir los eventlistener a los botones y productos al carrito
botones.forEach(function(boton) {
    boton.addEventListener("click", function () {
        let tarjeta = boton.parentElement;
        let nombre = tarjeta.querySelector("h3").textContent;
        let precio = parseFloat(tarjeta.querySelector(".precios").textContent);

        let encontrado = false;

        for (let i = 0; i < carrito.length; i++) {
            if (carrito[i].nombre === nombre) {
                carrito[i].cantidad = carrito[i].cantidad + 1;
                encontrado = true;
            }
        }

        if (encontrado === false) {
            carrito.push({ nombre: nombre, precio: precio, cantidad: 1 });
        }

        mostrarCarrito();
    });
});

//funcion para vaciar el carrito
document.querySelector("#vaciarCarrito").addEventListener("click", function () {
    carrito = [];
    mostrarCarrito();
});

//funcion para mostrar el carrito
function mostrarCarrito() {
    let listaCarrito = document.querySelector("#carrito");
    listaCarrito.innerHTML = "";

    if (carrito.length === 0) {
        listaCarrito.innerHTML = '<li class="vacio">El carrito está vacío</li>';
        document.querySelector("#total").textContent = "0 €";
    }

    let total = 0;

    carrito.forEach(function(producto) {
        let subtotal = Math.round(producto.precio * producto.cantidad * 100) / 100;
        total = total + subtotal;

        let li = document.createElement("li");
        li.textContent = producto.cantidad + "x " + producto.nombre + " - " + subtotal + " €";
        listaCarrito.appendChild(li);
    });

    total = Math.round(total * 100) / 100;
    document.querySelector("#total").textContent = total + " €";
}