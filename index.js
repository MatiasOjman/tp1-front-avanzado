const textoInput = document.getElementById("tarea");
const textoTextarea = document.getElementById("explicacion");
const contenedor =document.getElementById("contenedor-resultado"); 

const boton = document.getElementById("mostrar");
boton.addEventListener("click", mostrar);

function mostrar() {
 const resultadoinput= document.createElement("h1");
  resultadoinput.innerText= textoInput.value;
  contenedor.appendChild(resultadoinput);
  const resultadotext= document.createElement("p");
  resultadotext.innerText= textoTextarea.value;
  contenedor.appendChild(resultadotext);
 resultadoinput.classList.toggle("resultadosinput")
 resultadotext.classList.toggle("resultadostext")
}
 