interface Usuario {
  nombre: string;
  edad: number;
  juegoFavorito?: string;
}

type Identificador = string | number;

const usuario: Usuario = {
  nombre: "Gonzalo",
  edad: 19,
  juegoFavorito: "Minecraft"
};

let id: Identificador = 123;

console.log("Usuario:", usuario);
console.log("Nombre:", usuario.nombre);
console.log("Edad:", usuario.edad);
console.log("Juego favorito:", usuario.juegoFavorito);
console.log("Identificador:", id);