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

    // Obtiene la información que el usuario diligencio en el formulario
    function getData(){
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var usuario = document.getElementById('usuario');
        var dropdawngene = document.getElementById('genero');
        var dropdawnTipoU = document.getElementById('tipoUsuario');
        var clave = document.getElementById('clave');
        var confirmarClave = document.getElementById('confirmarClave');

        editUser(nombre, apellido, usuario, dropdawngene, dropdawnTipoU, clave, confirmarClave)
    }

    // Obtiene los datos del localStorage que tiene la llave editar + el tipo de dato y si todas las llaves
    // tienen un valor, invoca el metodo getModel para iniciar con la edicion del metodo
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

    // Obtiene los datos del usuario que se desea editar por medio del localStorage, para lograr colocar el
    // modelo en los campos correspondientes
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

    // indentifica la llave que posee el usuario a editar y se lo envia como parametro al metodo deleteOldRecord
    // Obtiene los valores de los nuevos datos y se los pasa como parametro al metodo validarInfo para continuar
    // con su validacion
    function editUser(nombre, apellido, usuario, dropdawngene, dropdawnTipoU, clave, confirmarClave){
        
        document.getElementById('btnEditar').addEventListener('click', function(){
            let contador = 0;
            var nombreVolatil = localStorage.getItem('editarNombre');
            do{
                contador++;
                var buscarLlave = localStorage.getItem("Nombre" + contador);
        
            }while(nombreVolatil != buscarLlave)

            deleteOldRecord(contador);

            const genero = dropdawngene.options[dropdawngene.selectedIndex].text;
            const tipoU = dropdawnTipoU.options[dropdawnTipoU.selectedIndex].text;

            validarInfo(nombre, apellido, genero, tipoU, usuario, confirmarClave, clave);
        });
    }

    // Recide como parametro la informacion que el usuario ingreso, y la verifica que todos los campos esten 
    // diligenciados, y que las contraselas coinsidan.
    function validarInfo(nombre, apellido, genero, tipoU, usuario, confirmarClave, clave){
        if(nombre.value == "" || apellido.value == "" || usuario.value == "" || clave.value == "" || confirmarClave.value == ""){
            alert('Por favor verifique la información diligenciada');

        }else if(clave.value != confirmarClave.value){
            alert('Por favor verifique la contraseña');

        }else{
            agregarRegistro(nombre.value, apellido.value, genero, tipoU, usuario.value, clave.value)

        }
    }

    // Recibe como parametro los nuevos datos que se deben almacenar en el localStorage, los almacena, muestra
    // una alerta en donde informa que el usuario fue modificado y redirige al usuario a la vista de administrador
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

    // Obtiene el parametro contrador del metodo editUser y del evento de guardar en la vista de editar usuario
    // con el dato que recibe elimina la anterior informacion del usuario que se esta editando, y ademas se eliminan
    // los datos con la llave "editar", que se utilizo para obtener el modelo.
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

    getData();
    setModel();
});
