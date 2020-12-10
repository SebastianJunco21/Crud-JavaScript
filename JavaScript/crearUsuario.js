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

    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var usuario = document.getElementById('usuario');
    var dropdawngene = document.getElementById('genero');
    var dropdawnTipoU = document.getElementById('tipoUsuario');
    var clave = document.getElementById('clave');
    var confirmarClave = document.getElementById('confirmarClave');
    const btnCrear = document.getElementById('btnCrear');

    btnCrear.addEventListener('click', function(){
        switch(dropdawngene.value){
            case '1':
                var genero = 'Masculino';
            break;
            case '2':
                var genero = 'Femenino';
            break;
        }

        switch(dropdawnTipoU.value){
            case '1':
                var tipoU = 'Administrador';
            break;
            case '2':
                var tipoU = 'Usuario';
            break;
        }
        
        if(nombre.value == "" || apellido.value == "" || usuario.value == "" || clave.value == "" || confirmarClave.value == ""){
            alert('Por favor verifique la información diligenciada');

        }else if(clave.value != confirmarClave.value){
            alert('Por favor verifique la contraseña');

        }else{
            agregarRegistro(nombre.value, apellido.value, genero, tipoU, usuario.value, clave.value)

        }
    });

    function agregarRegistro(nombre, apellido, genero, tipoU, usuario, clave){
        var contador = 0;
        do{
            contador++;
            var buscarLlave = localStorage.getItem("Usuario" + contador);

        }while(buscarLlave != null)

        localStorage.setItem('Clave' + contador, clave);
        localStorage.setItem('Usuario' + contador, usuario);
        localStorage.setItem('Genero' + contador, genero);
        localStorage.setItem('Tipo Usuario' + contador, tipoU);
        localStorage.setItem('Apellido' + contador, apellido);
        localStorage.setItem('Nombre' + contador, nombre);

        alert('Usuario creado con exito');
        window.location.href="administrador.html";
    }

});