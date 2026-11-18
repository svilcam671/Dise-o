let formulario = document.getElementById("formTarea");
let campoNombre = document.getElementById("nombre");
let campoFecha = document.getElementById("fecha");
let campoPrioridad = document.getElementById("prioridad");
let campoDescripcion = document.getElementById("descripcion");
let lista = document.getElementById("lista");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  let nombre = campoNombre.value;
  let fecha = campoFecha.value;
  let prioridad = campoPrioridad.value;
  let descripcion = campoDescripcion.value;

  let li = document.createElement("li");

  let titulo = document.createElement("strong");
  titulo.textContent = nombre;

  let datos = document.createElement("p");
  datos.textContent = "Fecha límite: " + fecha + " | Prioridad: " + prioridad;

  let texto = document.createElement("p");
  texto.textContent = descripcion;

  let botonEditar = document.createElement("button");
  botonEditar.textContent = "Editar";

  let botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";

  botonEditar.addEventListener("click", function () {
    campoNombre.value = nombre;
    campoFecha.value = fecha;
    campoPrioridad.value = prioridad;
    campoDescripcion.value = descripcion;
    li.remove();
  });

  botonEliminar.addEventListener("click", function () {
    li.remove();
  });

  li.className = "prioridad-" + prioridad.toLowerCase();
  li.appendChild(titulo);
  li.appendChild(datos);
  li.appendChild(texto);
  li.appendChild(botonEditar);
  li.appendChild(botonEliminar);
  lista.appendChild(li);

  campoNombre.value = "";
  campoFecha.value = "";
  campoPrioridad.value = "Media";
  campoDescripcion.value = "";
});