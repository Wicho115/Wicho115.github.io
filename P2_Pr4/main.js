let informacionPersonal = {
    nombre : "Luis Alfonso Martin Velázquez",
    edad : 20,
    datosContacto : {
        telefono: 5583388538,
        mail: "martin.velazquez.luis.alfonso@gmail.com"
    },

    libros : [
        {
            titulo: "El pozo de la ascención",
            autor : "Brandon Sanderson",
            anoPublicacion: 2007,
            editorial: "Nova",
            obtenerFicha : function(){
                return `${this.autor} (${this.anoPublicacion}). ${this.titulo}. ${this.editorial}.`
            }
        },
        {
            titulo: "El camino de los reyes",
            autor : "Brandon Sanderson",
            anoPublicacion: 2010,
            editorial: "Nova",
            obtenerFicha : function(){
                return `${this.autor} (${this.anoPublicacion}). ${this.titulo}. ${this.editorial}.`
            }
        },
        {
            titulo: "Narraciones de horro",
            autor : "H.P lovecraft",
            anoPublicacion: 2021,
            editorial: "Colecciones Fractales",
            obtenerFicha : function(){
                return `${this.autor} (${this.anoPublicacion}). ${this.titulo}. ${this.editorial}.`
            }
        }
    ],

    isGameDeveloper : true
}

console.log(informacionPersonal);
console.log("--------------------------------");
console.log("imprimiendo fichas bibliograficas:");
console.log(informacionPersonal.libros[0].obtenerFicha());
console.log(informacionPersonal.libros[1].obtenerFicha());
console.log(informacionPersonal.libros[2].obtenerFicha());