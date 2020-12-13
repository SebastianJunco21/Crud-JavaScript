'use strict'

// obtiene el usuario y la contraseña del usaurio logueado, si no existe lo redirige a la vista de 
// login
function validarCredenciales(){
    const user = localStorage.getItem('loginUsuario');
    const password = localStorage.getItem('loginClave');

    if(user == null || password == null || user == '' || password == ''){
        window.location.href="login.html";
    }
}

validarCredenciales();

window.addEventListener('load', function(){
    let cerrarSesion = document.getElementById('cerrarSesion');

    // Elimina las llaves del localStorage con el nombre loginUsuario loginClave loginTipoUsuario una vez
    // que el usuario cerro sesion
    cerrarSesion.addEventListener('click', function(){
        localStorage.removeItem('loginUsuario');
        localStorage.removeItem('loginClave');
        localStorage.removeItem('loginTipoUsuario');
        localStorage.removeItem('loginGenero');
        window.location.href="login.html";
    });

    function asignarImgGenero(){
        var elementHTML = document.getElementById('imgUsuario');
        var genero = localStorage.getItem('loginGenero');
        var usuario = localStorage.getItem('loginUsuario');

        if(genero == "Masculino"){
            elementHTML.setAttribute("src", "Imagenes/hombre.png");

        } else if(genero == "Femenino") {
            elementHTML.setAttribute("src", "Imagenes/mujer.jpg");

        } else {
            elementHTML.setAttribute("src", "Imagenes/hombre.png");
            alert("Por favor valide al informacion del usuario " + usuario + " ya que no cuenta con la totalidad de su información.");
        }
    }
    
    asignarImgGenero();
});