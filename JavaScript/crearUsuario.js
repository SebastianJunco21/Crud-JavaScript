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

    let nombre = document.getElementById('nombre');
    let apellido = document.getElementById('apellido');
    let usuario = document.getElementById('usuario');
    let dropdawngene = document.getElementById('genero');
    let dropdawnTipoU = document.getElementById('tipoUsuario');
    let clave = document.getElementById('clave');
    let confirmarClave = document.getElementById('confirmarClave');
    const btnCrear = document.getElementById('btnCrear');

    // identifica la informacion que el usuario añadio en los dropdown y valida la informacion que el usuario ingreso
    // para posteriormente enviarle los datos del usuario al metodo agregarRegistro para que este lo añada en el
    // localSrotage
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

    // Recibe como parametro los datos que el usuario ingreso, y los añade en el localStorage
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