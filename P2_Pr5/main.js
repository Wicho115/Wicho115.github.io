
class Poligono{

    constructor(lados, tamañoLado){
        this.lados = lados;
        this.tamañoLado = tamañoLado;
    }

    obtenerArea(){
        return 0;
    }

    obtenerPerimetro(){
        return this.tamañoLado * this.lados;
    }
}

class Triangulo extends Poligono{
    constructor(base, altura){
        super(3, base);
        this.base = base;
        this.altura = altura;
    }

    obtenerArea(){
        return (this.base * this.altura) / 2;
    }
}

class Cuadrado extends Poligono{
    constructor(lado){
        super(4, lado);
    }

    obtenerArea(){
        return this.tamañoLado * this.tamañoLado;
    }
}

class Pentagono extends Poligono{
    constructor(lado, apotema){
        super(5, lado);
        this.apotema = apotema;
    }

    obtenerArea(){
        return (this.obtenerPerimetro() * this.apotema) / 2;
    }
}

let figura = new Triangulo(2,5);
console.log("Area triangulo (base: 2, altura: 5)");
console.log(figura.obtenerArea());
console.log("-----------");
console.log("Perimetro triangulo (base: 2, altura: 5)");
console.log(figura.obtenerPerimetro());
console.log("-----------");

figura = new Cuadrado(5);
console.log("Area Cuadrado (lado: 5)");
console.log(figura.obtenerArea());
console.log("-----------");
console.log("Perimetro Cuadrado (lado: 5)");
console.log(figura.obtenerPerimetro());
console.log("-----------");

figura = new Pentagono(6, 4.1);
console.log("Area Pentagono (lado: 6, apotema: 4.1)");
console.log(figura.obtenerArea());
console.log("-----------");
console.log("Perimetro Pentagono (lado: 6, apotema: 4.1)");
console.log(figura.obtenerPerimetro());
console.log("-----------");