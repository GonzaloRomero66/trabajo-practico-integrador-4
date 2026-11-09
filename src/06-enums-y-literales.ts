enum Dificultad {
  Facil,
  Normal,
  Dificil
}

let nivel: Dificultad = Dificultad.Dificil;

console.log("Nivel de dificultad:", nivel);

let dificultad: "Facil" | "Normal" | "Dificil";

dificultad = "Facil";
console.log("Dificultad:", dificultad);

dificultad = "Dificil";
console.log("Dificultad:", dificultad);