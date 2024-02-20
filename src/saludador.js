export function saludar(nombre) {
  return nombre;
}

export function saludoPersonalizado(nombre, edad, genero) {
  let saludo = "<p>Hola, ";
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

