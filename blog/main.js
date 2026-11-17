document.getElementById("año").textContent = new Date().getFullYear();

var boton = document.getElementById("boton");

boton.onclick = function () {
    if (document.body.className == "oscuro") {
        document.body.className = "";
    } else {
        document.body.className = "oscuro";
    }
};