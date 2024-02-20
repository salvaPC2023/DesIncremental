import { saludoPersonalizadoESP, saludoPersonalizadoENG } from "./saludador";

const nombre_input = document.querySelector("#nombre");
const edad_input = document.querySelector("#edad");
const genero_input = document.querySelector("#generos");
const idioma_input = document.querySelector("#idiomas");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombre_input.value;
  const edad = edad_input.value;
  const genero = genero_input.value;
  const idioma = idioma_input.value;

  let fecha = new Date();
  let hora = fecha.getHours();
  let saludo = "";

  if(idioma === "espanol") {
    saludo = saludoPersonalizadoESP(nombre, edad, genero, hora);
  }
  if(idioma === "ingles") {
    saludo = saludoPersonalizadoENG(nombre, edad, genero, hora);
  }
  if(idioma === "aleman") {
    saludo = saludoPersonalizadoGER(nombre, edad, genero, hora);
  }
  div.innerHTML = saludo;
});
