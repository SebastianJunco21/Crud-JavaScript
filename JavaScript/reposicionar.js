'use strict'

// Cuando un elemento del localStorage es eliminado, valida si existe un usuario despues de este, y lo
// reposiciona con la llave anterior para no dejar huecos en el localStorage
function reposicionarUsuario(){
    let datoEliminado = parseInt(localStorage.getItem("Dato Eliminado"));
    let siguiDato = datoEliminado + 1;
    if(!isNaN(siguiDato)){
        do{
            datoEliminado = datoEliminado.toString();
            siguiDato = siguiDato.toString();
            var nombre = localStorage.getItem('Nombre' + siguiDato);
            const apellido = localStorage.getItem('Apellido' + siguiDato);
            const genero = localStorage.getItem('Genero' + siguiDato);
            const usuario = localStorage.getItem('Usuario' + siguiDato);
            const contraseña = localStorage.getItem('Clave' + siguiDato);
            const tipoUsuario = localStorage.getItem('Tipo Usuario' + siguiDato);

            if(nombre != null){
                assignNewPosition(nombre, apellido, genero, usuario, contraseña, tipoUsuario, datoEliminado);
                localStorage.removeItem("Dato Eliminado")
                deleteOldRecord(siguiDato);
                datoEliminado++;
                siguiDato++;

            }
        }while(nombre != null)
    }
}

// Asigna la nueva posicion a los usuarios que se encuantran despues de los registros que el usuario elimino.
function assignNewPosition(nombre, apellido, genero, usuario, contraseña, tipoUsuario, datoEliminado){
    localStorage.setItem('Nombre' + datoEliminado, nombre);
    localStorage.setItem('Apellido' + datoEliminado, apellido);
    localStorage.setItem('Genero' + datoEliminado, genero);
    localStorage.setItem('Usuario' + datoEliminado, usuario);
    localStorage.setItem('Clave' + datoEliminado, contraseña);
    localStorage.setItem('Tipo Usuario' + datoEliminado, tipoUsuario);
}

// Elimina el siguiente registro al que el usuario elimino, recibe como parametro la llave de este usuario.
function deleteOldRecord(siguiDato){
    localStorage.removeItem('Nombre' + siguiDato);
    localStorage.removeItem('Apellido' + siguiDato);
    localStorage.removeItem('Genero' + siguiDato);
    localStorage.removeItem('Usuario' + siguiDato);
    localStorage.removeItem('Clave' + siguiDato);
    localStorage.removeItem('Tipo Usuario' + siguiDato);
}

reposicionarUsuario();