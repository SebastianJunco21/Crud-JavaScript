'use strict'

window.addEventListener('load', function(){
    function setModel(){
        var nombre = localStorage.getItem('editarUsuario');
        var apellido = localStorage.getItem('editarApellido');
        var genero = localStorage.getItem('editarGenero');
        var usuario = localStorage.getItem('editarUsuario');
        var clave = localStorage.getItem('editarClave');
        var tipoUsuario = localStorage.getItem('editarTipoUsuario');

        if(nombre != null && nombre != "" && apellido != null && apellido != "" && genero != null && genero != "" && usuario != null && usuario != "" && clave != null && clave != "" && tipoUsuario != null && tipoUsuario != ""){
            getModel();
        }
    }

    function getModel(){
        var nombre = localStorage.getItem('editarNombre');
        var apellido = localStorage.getItem('editarApellido');
        var genero = localStorage.getItem('editarGenero');
        var usuario = localStorage.getItem('editarUsuario');
        var clave = localStorage.getItem('editarClave');
        var tipoUsuario = localStorage.getItem('editarTipoUsuario');

        if(genero == "Masculino"){
            genero = 1;
        }else{
            genero = 2;
        }
        if(tipoUsuario == "Administrador"){
            tipoUsuario = 1;
        }else{
            tipoUsuario = 2;
        }

        document.getElementById('nombre').value = nombre;
        document.getElementById('apellido').value = apellido;
        document.getElementById('genero').value = genero;
        document.getElementById('usuario').value = usuario;
        document.getElementById('clave').value = clave;
        document.getElementById('confirmarClave').value = clave;
        document.getElementById('tipoUsuario').value = tipoUsuario;

    }

    function editUser(){
        var btnEditar = document.getElementById('btnEditar');

        btnEditar.addEventListener('click', function(){
            let contador = 0;
            var nombreVolatil = localStorage.getItem('editarNombre');
            do{
                contador++;
                var buscarLlave = localStorage.getItem("Nombre" + contador);
        
            }while(nombreVolatil != buscarLlave)

            deleteOldRecord(contador);

            var nombre = document.getElementById('nombre');
            var apellido = document.getElementById('apellido');
            var usuario = document.getElementById('usuario');
            var dropdawngene = document.getElementById('genero');
            var dropdawnTipoU = document.getElementById('tipoUsuario');
            var clave = document.getElementById('clave');
            var confirmarClave = document.getElementById('confirmarClave');

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
            
            validarInfo(nombre, apellido, genero, tipoU, usuario, confirmarClave, clave);
            
        });
    }

    function validarInfo(nombre, apellido, genero, tipoU, usuario, confirmarClave, clave){
        if(nombre.value == "" || apellido.value == "" || usuario.value == "" || clave.value == "" || confirmarClave.value == ""){
            alert('Por favor verifique la información diligenciada');

        }else if(clave.value != confirmarClave.value){
            alert('Por favor verifique la contraseña');

        }else{
            agregarRegistro(nombre.value, apellido.value, genero, tipoU, usuario.value, clave.value)

        }
    }

    function agregarRegistro(nombre, apellido, genero, tipoU, usuario, clave){
        let contador = 0;
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

        alert('El usuario ha sido modificado.');
        window.location.href="administrador.html";
    }

    function deleteOldRecord(contador){
        localStorage.removeItem('Nombre' + contador);
        localStorage.removeItem('Apellido' + contador);
        localStorage.removeItem('Genero' + contador);
        localStorage.removeItem('Usuario' + contador);
        localStorage.removeItem('Clave' + contador);
        localStorage.removeItem('Tipo Usuario' + contador);

        localStorage.removeItem('editarNombre');
        localStorage.removeItem('editarApellido');
        localStorage.removeItem('editarGenero');
        localStorage.removeItem('editarUsuario');
        localStorage.removeItem('editarClave');
        localStorage.removeItem('editarTipoUsuario');
    }

    editUser();
    setModel();
});
