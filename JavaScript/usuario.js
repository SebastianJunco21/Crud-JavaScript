'use strict'

// Valida con que tipo de usuario se encuentra logueado, para enviarlo al login si el tipo de usuario
// no coincide con Administrador o usuario, o redirigirlo a la vista de administrador si se encuentra
// logueado con ese tipo de usuario.
function validarTipoUsuario(){
    const tipoUsuario = localStorage.getItem('loginTipoUsuario');
    
    if(tipoUsuario == null || tipoUsuario == ''){
        window.location.href="login.html";
        alert('Por favor inície sesion nuevamente');

    }else if(tipoUsuario == "Administrador"){
        window.location.href="administrador.html";

    }
}

validarTipoUsuario(); 