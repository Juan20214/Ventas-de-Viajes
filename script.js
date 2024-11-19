import { argentina, españa, suiza, brasil, dinamarca, estadosunidos } from "./paises.js";

let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')



enlaces.forEach(function (enlace) {

    enlace.addEventListener('click', function () {
        // Remover la clase "active" de todos los enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active')

        });

        //Agregar activo al que corresponda
        this.classList.add('active')

        //Traer la informacion del objeto correrspondiete a la eleccion
        let contenido = obtenerContenido(this.textContent)

        //Mostrar contenido en el DOM
        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio


    })

});

// Funcion para obtener la informacion correcta desde pasies.js
function obtenerContenido(enlace) {

    let contenido = {
        'Argentina': argentina,
        'España': españa,
        'Suiza': suiza,
        'Brasil': brasil,
        'Dinamarca': dinamarca,
        'Estados Unidos': estadosunidos

    };
    return contenido[enlace]
}