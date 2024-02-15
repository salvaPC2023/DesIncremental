import saludar from "./saludador";

const nombre_input = document.querySelector("#nombre");
const edad_input = document.querySelector("#edad");
const generom_input = document.querySelector("#generom");
const generof_input = document.querySelector("#generof");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombre_input.value;
  const edad = edad_input.value;
  var generom = generom_input;
  var generof = generof_input;

  if (edad > 30) {
    if(generom.checked){
      div.innerHTML = "<p>" + "Hola, señor " + saludar(nombre) + "</p>";
    }
    else{
      div.innerHTML = "<p>" + "Hola, señora " + saludar(nombre) + "</p>";
    }

  }
  else {
    div.innerHTML = "<p>" + "Hola, " + saludar(nombre) + "</p>";
  }
});
