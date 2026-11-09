INVESTIGACION
Tema 1: ¿Qué es TypeScript?
● ¿Qué es TypeScript y quién lo desarrolla?
TypeScript es un lenguaje de programacion de codigo abierto desarrollado por Microsoft, todo codigo JavaScript valido tambien sera un codigo TypeScript valido

● ¿Qué diferencias tiene con JavaScript?
Las diferencias que tiene JavaScript con Typescript es que TypeScript es estatico y JavaScript dinamico, javascript se ejecuta directamente en el navegador mientras que typescript requiere un paso de transpilacion, el paso de transpilacion se refiere de pasar un codigo a otro lenguaje de programacion

● ¿Qué ventajas ofrece?
Las ventas que ofrece es que nos avisa sobre errores muy temprano, su compatibilidad con javascript y que gracias al uso de tipado estatico facilita la escabilidad y mantenimiento del codigo en proyectos de gran escala

● ¿Cuál es su versión actual?
Su version actual es Typescript 7 que salio el 8 de julio de 2026

Tema 2: Crear y ejecutar un proyecto
● ¿Cómo se instala TypeScript en un proyecto?
TypeScript se instala con el siguiente comando en la terminal, npm install -D typescript tsx @types/node

● ¿Para qué sirve el archivo tsconfig.json?
Para lo que sirve el archivo tsconfig.json es para confingurar como va a trabajar typescript con el proyecto
● ¿Qué hace el comando tsc?
Lo que hace el comando tsc es el que convierte un codigo de typescript a javascript

● ¿Qué diferencia hay entre ejecutar un archivo con tsc, tsx y node?
La diferencia de ejecutar un archivo con tsc, tsx y node es que tsc pasa el codigo de typescript a javascript, el tsx ejecuta el codigo typescript directamente y el node ejecuta un codigo de javascript

Tema 3: Tipos básicos

● ¿Qué son los tipos string, number y boolean?
Son tipos de datos que nos indican el tipo de valor, el string seria tipo texto, el number seria tipo numero y el boolean seria verdadero o falso
const producto: string = "Teclado";
const cantidad: number = 2;
const enStock: boolean = true;

console.log(producto);
console.log(cantidad);
console.log(enStock);
● ¿Cómo se declara un array con tipo?
para declarar un array con tipo seria crear una variable, luego poner el tipo y luego asignarle lo que tendra adentro segun el tipo que hemos puesto, un ejemplo seria
const nombre: string[] = ["Gonzalo", "William"]

● ¿Qué es un tipo unión?
El tipo union es cuando a una variable se le permite mas de 2 tipos validos, un ejemplo seria
const datos: (string | number)[] = ["Gonzalo", 19]

● ¿Por qué se recomienda evitar any?
Se recomienda evitar any como permite guardar cualquier dato en una variable pero no verifica que tipo de dato es

Tema 4: Funciones

● ¿Cómo se indican los tipos de los parámetros?
Los tipos de los parámetros se indican colocando dos puntos después del nombre de cada parámetro, seguido del tipo de dato

● ¿Cómo se indica el tipo de retorno?
El tipo de retorno se indica colocando dos puntos despues de los parentesis de los parametros de la funcion y escribiendo el tipo de dato que devolvera
● ¿Qué es un parámetro opcional?
Un parametro opcional es un parametro que no es obligatorio o requerido al llamar una funcion y se lo indica con el ?, un ejemplo seria
function saludar(nombre: string, edad?: number): void {
console.log(nombre, edad);
}

saludar("Gonzalo");
saludar("Gonzalo", 22);
● ¿Qué es un parámetro por defecto?
un parametro por defecto es un parametro que ya tiene un valor asignado desde el momento en el que se creo, un ejemplo seria crear un usuario, su estado seria "activo" por defecto
Tema 5: Interfaces y type
● ¿Qué es una interfaz y para qué sirve?
Un interfaz es como un molde que indica que datos tiene que tener y de que tipo debe de ser
● ¿Qué es un type?
Un type permite crear un tipo de dato personalizado, dándole un nombre para poder utilizarlo en diferentes partes del código.
● ¿Cómo se declara una propiedad opcional?
Una propiedad opcional se declara con ? despues de la propiedad antes de los dos puntos
interface Gonzalo {
nombre: string;
edad: number;
juegoFavorito?: string;
}
● ¿Cuándo conviene usar cada uno?
Conviene utilizar interface para definir la estructura de los objetos y type en uniones o tipos literales
Tema 6: Enums y tipos literales
● ¿Qué es un enum?
Es un conjunto de constantes con nombres que permite agrupar valores relacionados y utilizarlos de manera más sencilla
enum Dificultad {
Facil,
Normal,
Dificil
}
let nivel: Dificultad = Dificultad.Dificil;

console.log(nivel);
● ¿Qué es un tipo literal?
Un tipo literal permite que una variable solamente pueda contener un valor especifico o uno de varios valores que nosotros definamos
let dificultad: "Facil" | "Normal" | "Dificil";

dificultad = "Facil";  
dificultad = "Dificil";  
dificultad = "Extremo";

El extremo dara error porque no lo definimos
● ¿En qué se parecen y en qué se diferencian?
En lo que se diferencian es que enum agrupa valores bajo un nombre mientras que un tipo literal define directamente cuales estan permitidos
● ¿En qué situaciones se puede usar cada uno?
En las situaciones que se puede ocupar el tipo literal son casos simples que no tengan muchos valores y el enum cuando se quiere agrupar varias constantes
