'use strict'

window.addEventListener('load', function(){

    function añadirTextoTabla(){
        var contador = 0;
        do{
            contador++;
            var buscarLlave = localStorage.getItem("Usuario" + contador);
    
        }while(buscarLlave != null)
    
        var tbody = document.getElementById('tbody');
        var name = 0;

        for(var i = 1; i <= contador-1; i++){
            var hilera = document.createElement("tr");

            var nombre = localStorage.getItem("Nombre" + i);
            var apellido = localStorage.getItem("Apellido" + i);
            var usuario = localStorage.getItem("Usuario" + i);
            var genero = localStorage.getItem("Genero" + i);
            ++name;

            GenerarTextoTabla(nombre, apellido, usuario, genero, hilera);

            generarImgTabla(hilera, name);

            tbody.appendChild(hilera);
        }
    }

    function GenerarTextoTabla(nombre, apellido, usuario, genero, hilera){
        var celda = document.createElement("td");
        celda.prepend(nombre);
        hilera.appendChild(celda);

        var celda = document.createElement("td");
        celda.prepend(apellido);
        hilera.appendChild(celda);

        var celda = document.createElement("td");
        celda.prepend(usuario);
        hilera.appendChild(celda);

        var celda = document.createElement("td");
        celda.prepend(genero);
        hilera.appendChild(celda);

    }

    function generarImgTabla(hilera, name){
        var celda = document.createElement("td");
        var etiquetaEditar = document.createElement("img");
        etiquetaEditar.setAttribute("src", "Imagenes/Editar.svg");
        etiquetaEditar.setAttribute("class", "btnEditar");
        etiquetaEditar.setAttribute("onclick", "editar(" + name + ")");
        etiquetaEditar.setAttribute("name", name);
        celda.prepend(etiquetaEditar);
        hilera.appendChild(celda);

        var celda = document.createElement("td");
        var etiquetaEliminar = document.createElement("img");
        etiquetaEliminar.setAttribute("src", "Imagenes/Eliminar.png");
        etiquetaEliminar.setAttribute("class", "btnEliminar");
        etiquetaEliminar.setAttribute("onclick", "eliminar(" + name + ")");
        etiquetaEliminar.setAttribute("name", name);
        celda.prepend(etiquetaEliminar);
        hilera.appendChild(celda);

    }

    añadirTextoTabla();

});