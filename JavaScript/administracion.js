'use strict'

// Valida con que tipo de usuario se encuentra logueado, para enviarlo al login si el tipo de usuario
// no coincide con Administrador o usuario, o redirigirlo a la vista de usuario si se encuentra
// logueado con ese tipo de usuario.
function validarTipoUsuario(){
    const tipoUsuario = localStorage.getItem('loginTipoUsuario');
    
    if(tipoUsuario == null || tipoUsuario == ''){
        window.location.href="login.html";
        alert('Por favor inície sesion nuevamente');

    }else if(tipoUsuario == "Usuario"){
        window.location.href="usuario.html";

    }
}

validarTipoUsuario();

window.addEventListener('load', function(){

    // determina la cantidad de usuario que se encuentran registrados en el localStorage para seleccionar
    // la informacion necesaria y rellenar la tabla de la vista de administracion
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

    // Recibe como parametro el nombre, apellido, usuario, genero y la hilera (etiqueta tr) para añadir
    // a la tabla dicha información
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

    // Recibe como parametro el la hilera (etiqueta tr) y el identificador de dicho usuario para añadir
    // a la tabla la imagen de editar y crear, asignandolesel atribut onclick con el parametro editar
    // mas el identificador para poder identificar que boton corresponde a que usuario.
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