export function saludar(nombre) {
  return nombre;
}

export function saludoPersonalizado(nombre, edad, genero, hora) {
  let saludo = "";
  if(hora < 12 && hora > 5) {
    saludo += "<p>Buenos días,";
  }
  else if(hora < 19){
    saludo += "<p>Buenas tardes,";
  }
  else {
    saludo += "<p>Buenas noches,";
  }
  if(edad > 30) {
    if(genero === "masculino") {
        saludo += " señor ";
      }
    if(genero === "femenino") {
        saludo += " señora ";
    }
  }
  else {
    if(genero === "masculino") {
        saludo += " joven ";
      }
    if(genero === "femenino") {
        saludo += " señorita ";
    }
  }
  saludo = saludo + nombre + "</p>";
  return saludo;
}

