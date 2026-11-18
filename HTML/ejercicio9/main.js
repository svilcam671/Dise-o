let visor = document.getElementById("visor");
let botones = document.querySelectorAll("button");

let primerNumero = 0;
let operador = "";
let numeroNuevo = true;

botones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    let valor = boton.textContent;

    if (valor == "C") {
      visor.value = "0";
      primerNumero = 0;
      operador = "";
      numeroNuevo = true;
    } else if (valor == "+" || valor == "-" || valor == "×" || valor == "÷") {
      primerNumero = parseFloat(visor.value);
      operador = valor;
      numeroNuevo = true;
    } else if (valor == "=") {
      calcular();
    } else {
      if (numeroNuevo) {
        visor.value = valor;
        numeroNuevo = false;
      } else {
        visor.value = visor.value + valor;
      }
    }
  });
});

function calcular() {
  let segundoNumero = parseFloat(visor.value);
  let resultado = segundoNumero;

  if (operador == "+") {
    resultado = primerNumero + segundoNumero;
  } else if (operador == "-") {
    resultado = primerNumero - segundoNumero;
  } else if (operador == "×") {
    resultado = primerNumero * segundoNumero;
  } else if (operador == "÷") {
    if (segundoNumero == 0) {
      resultado = "Error";
    } else {
      resultado = primerNumero / segundoNumero;
    }
  }

  visor.value = resultado;
  operador = "";
  numeroNuevo = true;
}