const textoInput = document.getElementById("tarea");
const textoTextarea = document.getElementById("explicacion");
const contenedor =document.getElementById("contenedor-resultado"); 

const boton = document.getElementById("mostrar");
boton.addEventListener("click", mostrar);

let contadorDivs=0;
function mostrar() {
 const resultadoinput= document.createElement("h1");
   resultadoinput.innerText= textoInput.value;
   resultadoinput.classList.add("resultadosinput")
   
  const resultadotext= document.createElement("p");
    resultadotext.innerText= textoTextarea.value;
    resultadotext.classList.add("resultadostext")

 const respuesta= document.createElement("div");
   respuesta.classList.add("resultado");
   
 
   contadorDivs++;
   respuesta.id = `respuesta-${contadorDivs}`;

    respuesta.appendChild(resultadoinput);
    respuesta.appendChild(resultadotext);

    contenedor.appendChild(respuesta);
    
    
}
 