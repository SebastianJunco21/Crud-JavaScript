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
        const cantUsuarios = Math.round(localStorage.length/7)+1;

        let tbody = document.getElementById('tbody');
        let name = 0;

        for(let i = 1; i <= cantUsuarios; i++){

            var verifExistencia = localStorage.getItem('Usuario' + i);
            if(verifExistencia != void 0 && verifExistencia != ""){
                const hilera = document.createElement("tr");

                let nombre = localStorage.getItem("Nombre" + i);
                let apellido = localStorage.getItem("Apellido" + i);
                let usuario = localStorage.getItem("Usuario" + i);
                let genero = localStorage.getItem("Genero" + i);
                ++name;

                GenerarTextoTabla(nombre, apellido, usuario, genero, hilera);
                generarImgTabla(hilera, name);
                tbody.appendChild(hilera);
            }
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
        celda.prepend(etiquetaEditar);
        hilera.appendChild(celda);

        var celda = document.createElement("td");
        var etiquetaEliminar = document.createElement("img");
        etiquetaEliminar.setAttribute("src", "Imagenes/Eliminar.png");
        etiquetaEliminar.setAttribute("class", "btnEliminar");
        etiquetaEliminar.setAttribute("onclick", "eliminar(" + name + ")");
        celda.prepend(etiquetaEliminar);
        hilera.appendChild(celda);

    }

    // cantidadUsuarios();
    añadirTextoTabla();

});