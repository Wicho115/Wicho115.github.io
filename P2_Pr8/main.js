import {factorial} from "./factorial.js"
import {obtenerReloj} from "./reloj.js"
import {cuadrado, triangulo, pentagono} from "./figuras.js"


factorial(5);
factorial(4);

console.log("Area triangulo (base: 2, altura: 5)");
console.log(triangulo.obtenerArea());
console.log("-----------");
console.log("Perimetro triangulo (base: 2, altura: 5)");
console.log(triangulo.obtenerPerimetro());
console.log("-----------");

console.log("Area Cuadrado (lado: 5)");
console.log(cuadrado.obtenerArea());
console.log("-----------");
console.log("Perimetro Cuadrado (lado: 5)");
console.log(cuadrado.obtenerPerimetro());
console.log("-----------");

console.log("Area Pentagono (lado: 6, apotema: 4.1)");
console.log(pentagono.obtenerArea());
console.log("-----------");
console.log("Perimetro Pentagono (lado: 6, apotema: 4.1)");
console.log(pentagono.obtenerPerimetro());
console.log("-----------");


setInterval(() => {
    console.log(obtenerReloj());
},1001)