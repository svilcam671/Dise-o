document.getElementById("anio").textContent = new Date().getFullYear();

var boton = document.getElementById("boton-tema");

boton.onclick = function () {
    if (document.body.className == "oscuro") {
        document.body.className = "";
    } else {
        document.body.className = "oscuro";
    }
};