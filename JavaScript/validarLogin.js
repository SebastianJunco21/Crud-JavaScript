'use strict'

function validarCredenciales(){
    let user = localStorage.getItem('loginUsuario');
    let password = localStorage.getItem('loginClave');

    if(user == null || password == null || user == '' || password == ''){
        window.location.href="login.html";
    }
}

validarCredenciales();

window.addEventListener('load', function(){
    let cerrarSesion = document.getElementById('cerrarSesion');

    cerrarSesion.addEventListener('click', function(){
        localStorage.removeItem('loginUsuario');
        localStorage.removeItem('loginClave');
        window.location.href="login.html";
    });
});