const textoInput = document.getElementById("tarea");
const textoTextarea = document.getElementById("explicacion");

const boton = document.getElementById("mostrar");

// Se añade el evento click, pasando la función `mostrar` como referencia, sin paréntesis.
boton.addEventListener("click", mostrar);

function mostrar() {
  // Se accede a los valores de las variables globales.
  alert(textoInput.value + " " + textoTextarea.value);
}
 