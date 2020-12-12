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

    // Obtiene los campos del formulario de crear usuario
    function obtenerCampos(){
        const nombre = document.getElementById('nombre');
        const apellido = document.getElementById('apellido');
        const usuario = document.getElementById('usuario');
        const dropdawngene = document.getElementById('genero');
        const dropdawnTipoU = document.getElementById('tipoUsuario');
        const clave = document.getElementById('clave');
        const confirmarClave = document.getElementById('confirmarClave');
        const btnCrear = document.getElementById('btnCrear');

        createUser(nombre, apellido, usuario, dropdawngene, dropdawnTipoU, clave, confirmarClave, btnCrear);
    }

    // Me permite crear los usuarios con los datos que el usuario diligencio en el formulario de crear usuario
    // obtiene los parametros del metodo obtenerCampos, trae todos los campos mas el boton para activar toda la
    // funcionalidad
    function createUser(nombre, apellido, usuario, dropdawngene, dropdawnTipoU, clave, confirmarClave, btnCrear){
        
        // identifica la informacion que el usuario añadio en los dropdown y valida la informacion que el usuario ingreso
        // para posteriormente enviarle los datos del usuario al metodo agregarRegistro para que este lo añada en el
        // localSrotage
        btnCrear.addEventListener('click', function(){
            const genero = dropdawngene.options[dropdawngene.selectedIndex].text;
            const tipoU = dropdawnTipoU.options[dropdawnTipoU.selectedIndex].text;
            
            if(nombre.value == "" || apellido.value == "" || usuario.value == "" || clave.value == "" || confirmarClave.value == ""){
                alert('Por favor verifique la información diligenciada');

            }else if(clave.value != confirmarClave.value){
                alert('Por favor verifique la contraseña');

            }else{
                agregarRegistro(nombre.value, apellido.value, genero, tipoU, usuario.value, clave.value)

            }
        });
    }

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

    obtenerCampos();
});