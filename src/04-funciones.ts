function sumar(a: number, b: number): number {
  return a + b;
}

function saludar(nombre: string, edad?: number): void {
  console.log("Hola", nombre, "Edad:", edad);
}

function registrar(usuario: string, rol: string = "INVITADO"): void {
  console.log(`Usuario ${usuario} con rol ${rol}`);
}

console.log("Resultado:", sumar(5, 3));

saludar("Gonzalo");
saludar("Gonzalo", 19);

registrar("Gonzalo");
registrar("Gonzalo", "ADMIN");