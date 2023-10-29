//import materias from "./materias.json"

const $root = document.querySelector("#root");

async function cargarDatos(){
    let response = await fetch('materias.json');
    console.log(response);
    const data = await response.json();
    console.log(data);

    data.materias.forEach((materia) => {
        $root.innerHTML += `
            <h1>${materia.Materia}</h1>
            <h2>${materia.Docente}</h2>
            <p>${materia.Descripcion}</p>
            <hr>
        `
    })
};

cargarDatos();