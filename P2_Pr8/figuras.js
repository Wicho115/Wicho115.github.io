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

export let triangulo = new Triangulo(2,5);
export let cuadrado = new Cuadrado(5);
export let pentagono = new Pentagono(6, 4.1);