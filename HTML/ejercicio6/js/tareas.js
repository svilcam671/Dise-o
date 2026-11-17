const formTarea = document.getElementById("formTarea");
const textoTarea = document.getElementById("textoTarea");
const tablaTareas = document.getElementById("tablaTareas");

formTarea.addEventListener("submit", function (evento) {
  evento.preventDefault();
  crearFila(textoTarea.value.trim());
  textoTarea.value = "";
});

function crearFila(texto) {
  if (texto === "") {
    return;
  }

  const fila = document.createElement("tr");

  const celdaHecha = document.createElement("td");
  const check = document.createElement("input");
  check.type = "checkbox";
  celdaHecha.appendChild(check);

  const celdaTexto = document.createElement("td");
  celdaTexto.textContent = texto;

  const celdaAcciones = document.createElement("td");
  const botonEditar = document.createElement("button");
  botonEditar.textContent = "Editar";
  const botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Borrar";
  celdaAcciones.appendChild(botonEditar);
  celdaAcciones.appendChild(botonBorrar);

  check.addEventListener("change", function () {
    celdaTexto.classList.toggle("hecha");
  });

  botonEditar.addEventListener("click", function () {
    const nuevoTexto = prompt("Cambia el texto de la tarea:", celdaTexto.textContent);
    if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
      celdaTexto.textContent = nuevoTexto.trim();
    }
  });

  botonBorrar.addEventListener("click", function () {
    tablaTareas.removeChild(fila);
  });

  fila.appendChild(celdaHecha);
  fila.appendChild(celdaTexto);
  fila.appendChild(celdaAcciones);
  tablaTareas.appendChild(fila);
}

crearFila("Entregar los ejercicios de HTML");
