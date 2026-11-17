let pantalla = document.getElementById("pantalla");
let calculadora = document.getElementById("calculadora");

let numeroGuardado = 0;
let operacion = "";
let nuevoNumero = true;

calculadora.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    pulsarTecla(e.target.textContent);
  }
});

function pulsarTecla(tecla) {
  if (!isNaN(tecla)) {
    escribirNumero(tecla);
  } else if (tecla === ".") {
    if (nuevoNumero) {
      escribirNumero("0");
    }
    if (!pantalla.value.includes(".")) {
      pantalla.value = pantalla.value + ".";
    }
  } else if (tecla === "C") {
    pantalla.value = "0";
    numeroGuardado = 0;
    operacion = "";
    nuevoNumero = true;
  } else if (tecla === "←") {
    pantalla.value = pantalla.value.slice(0, -1);
    if (pantalla.value === "" || pantalla.value === "-") {
      pantalla.value = "0";
      nuevoNumero = true;
    }
  } else if (tecla === "=") {
    resolver();
  } else {
    if (operacion !== "" && !nuevoNumero) {
      resolver();
    }
    numeroGuardado = parseFloat(pantalla.value);
    operacion = tecla;
    nuevoNumero = true;
  }
}

function escribirNumero(numero) {
  if (nuevoNumero || pantalla.value === "0") {
    pantalla.value = numero;
    nuevoNumero = false;
  } else {
    pantalla.value = pantalla.value + numero;
  }
}

function resolver() {
  let actual = parseFloat(pantalla.value);
  let resultado = actual;

  if (operacion === "+") resultado = numeroGuardado + actual;
  if (operacion === "−") resultado = numeroGuardado - actual;
  if (operacion === "×") resultado = numeroGuardado * actual;
  if (operacion === "%") resultado = numeroGuardado % actual;
  if (operacion === "÷") {
    if (actual === 0) {
      resultado = "Error";
    } else {
      resultado = numeroGuardado / actual;
    }
  }

  pantalla.value = resultado;
  operacion = "";
  nuevoNumero = true;
}
