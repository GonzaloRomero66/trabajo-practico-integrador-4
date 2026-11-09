# Glosario de TypeScript

### 1. TypeScript

Es un lenguaje de programación basado en JavaScript que permite definir tipos de datos.

```ts
let nombre: string = "Gonzalo";
```

### 2. String

Es un tipo de dato utilizado para representar textos.

```ts
let nombre: string = "Gonzalo";
```

### 3. Number

Es un tipo de dato utilizado para representar números enteros y decimales.

```ts
let edad: number = 19;
```

### 4. Boolean

Es un tipo de dato que solamente puede tener dos valores: `true` o `false`.

```ts
let esEstudiante: boolean = true;
```

### 5. Array

Es una estructura que permite almacenar varios valores del mismo tipo o de diferentes tipos.

```ts
let juegos: string[] = ["Minecraft", "Roblox"];
```

### 6. Tipo unión

Permite que una variable pueda almacenar valores de diferentes tipos.

```ts
let dato: string | number = "Gonzalo";
dato = 19;
```

### 7. Función

Es un bloque de código que realiza una tarea y puede recibir parámetros y devolver un resultado.

```ts
function sumar(a: number, b: number): number {
  return a + b;
}
```

### 8. Parámetro opcional

Es un parámetro que no es obligatorio al llamar a una función. Se declara utilizando `?`.

```ts
function saludar(nombre: string, edad?: number): void {
  console.log(nombre, edad);
}

saludar("Gonzalo");
```

### 9. Interface

Permite definir la estructura que debe tener un objeto, indicando sus propiedades y tipos de datos.

```ts
interface Usuario {
  nombre: string;
  edad: number;
}
```

### 10. Type

Permite crear un nombre para representar un tipo de dato, como un objeto o una unión de tipos.

```ts
type Identificador = string | number;

let id: Identificador = 123;
```

### 11. Enum

Permite definir un conjunto de valores con nombres, facilitando su utilización dentro del código.

```ts
enum Dificultad {
  Facil,
  Normal,
  Dificil,
}

let nivel: Dificultad = Dificultad.Dificil;
```

### 12. Tipo literal

Permite establecer los valores específicos que puede aceptar una variable.

```ts
let dificultad: "Facil" | "Normal" | "Dificil";

dificultad = "Facil";
```
