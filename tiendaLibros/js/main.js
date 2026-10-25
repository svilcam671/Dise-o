let totalCarrito = 0;

const botonComprar = document.getElementById("comprar");
const textoCarrito = document.getElementById("contador");
const mensaje = document.getElementById("mensaje");

if (botonComprar) {
    botonComprar.addEventListener("click", function () {
        totalCarrito = totalCarrito + 1;
        textoCarrito.textContent = totalCarrito;

        if (totalCarrito == 1) {
            mensaje.textContent = "Libro añadido al carrito";
        } else {
            mensaje.textContent = "Ya tienes " + totalCarrito + " ejemplares en el carrito.";
        }
    });
}