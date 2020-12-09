'use strict'

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

    function login(){
        const inputUsuario = document.getElementById('usuario');
        const inputContraseña = document.getElementById('contraseña');
        const btnIngresar = document.getElementById('btnIngresar');

        btnIngresar.addEventListener('click', function(){
            
            validarDatos(inputUsuario, inputContraseña);
            
        });
    }

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

    function almacenarLogin(identificador){
        var getUser = localStorage.getItem('Usuario' + identificador);
        var getPassword = localStorage.getItem('Clave' + identificador);

        localStorage.setItem('loginUsuario', getUser);
        localStorage.setItem('loginClave', getPassword);
    }

    login();
});