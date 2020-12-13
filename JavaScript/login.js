'use strict'

// Carga los 2 primeros usuarios en el localStorage (administrador - usuario) por defecto por 
// si es la primera ves que se habre esta pagina en ese navegador.
function usuarioPredeterminado(){
        localStorage.setItem('Clave1', 'lider123');
        localStorage.setItem('Usuario1', 'lider123');
        localStorage.setItem('Genero1', 'Masculino');
        localStorage.setItem('Tipo Usuario1', 'Administrador');
        localStorage.setItem('Apellido1', 'lider123');
        localStorage.setItem('Nombre1', 'lider123');

        localStorage.setItem('Clave2', 'usuario123');
        localStorage.setItem('Usuario2', 'usuario123');
        localStorage.setItem('Genero2', 'Femenino');
        localStorage.setItem('Tipo Usuario2', 'Usuario');
        localStorage.setItem('Apellido2', 'usuario123');
        localStorage.setItem('Nombre2', 'usuario123');
}

usuarioPredeterminado();

window.addEventListener('load', function(){

    // Se encargada de obtener los campos de usuario y conraseña, para enviarlos como parametro
    // al metodo validarDatos cuando el usuaro presione enter o de click en el boton de enviar
    function login(){
        const inputUsuario = document.getElementById('usuario');
        const inputContraseña = document.getElementById('contraseña');
        const btnIngresar = document.getElementById('btnIngresar');

        btnIngresar.addEventListener('click', function(){
            event.preventDefault();
            validarDatos(inputUsuario, inputContraseña);

        });
    }

    // Recibe los datos que llegan del metodo login.
    // Valida que el usuario y la contraseña se encuantre en el localStorage y redirecciona al usuario
    // ya sea hacia la vista administrador, o hacia la vista usuario
    function validarDatos(inputUsuario, inputContraseña){
        var primerContador = 0;
        var segundoContador = 0;

        do{
            primerContador++;
            var buscarLlave = localStorage.getItem("Usuario" + primerContador);
    
        }while(buscarLlave != null)

        do{
            segundoContador++;
            var validarUsuario = localStorage.getItem("Usuario" + segundoContador);
            var validarClave = localStorage.getItem("Clave" + segundoContador);

        }while(validarUsuario != inputUsuario.value && validarClave != inputContraseña.value && segundoContador <= primerContador)
        
        redireccionamiento(validarUsuario, inputUsuario, validarClave, inputContraseña, segundoContador, primerContador);
        
    }

    // redirige a los usuarios dependiendo de sus credenciales, hacia la vista administracod o usuario.
    // Obtiene los parametros necesarios del metodo validarDatos.
    function redireccionamiento(validarUsuario, inputUsuario, validarClave, inputContraseña, segundoContador, primerContador){
        if(validarUsuario != null && validarClave != null && validarUsuario == inputUsuario.value && validarClave == inputContraseña.value){
            const tipoUsuario = localStorage.getItem('Tipo Usuario' + segundoContador);
            if(tipoUsuario == "Administrador"){
                almacenarLogin(segundoContador);
                window.location.href="administrador.html";
            }else if(tipoUsuario == "Usuario"){
                almacenarLogin(segundoContador);
                window.location.href="usuario.html";
            }
        }else{
            alert('Por favor verifique sus credenciales');
        }
    }

    // Recibe como parametro el identificador del usuario con el que se encuantra en el localStorage
    // y almacena ese dato con la palabra clave login, para identificar en que momento un usuario se encuentra
    // logueado. Almacena el usuario, la contraseña y el tipo de usuario
    function almacenarLogin(identificador){
        const getUser = localStorage.getItem('Usuario' + identificador);
        const getPassword = localStorage.getItem('Clave' + identificador);
        const getTipoUsuario = localStorage.getItem('Tipo Usuario' + identificador);
        const getGenero = localStorage.getItem('Genero' + identificador);

        localStorage.setItem('loginUsuario', getUser);
        localStorage.setItem('loginClave', getPassword);
        localStorage.setItem('loginTipoUsuario', getTipoUsuario);
        localStorage.setItem('loginGenero', getGenero);
    }

    login();
});