'use strict'

function cantidadUsuarios(){
    const tamLocalStorage = localStorage.length;
    const cantUsuarios = Math.round(tamLocalStorage/7)+1;

    var contador = 0;
    var usuario = "";
    do{

        contador++;
        if(usuario != void 0 && usuario != ""){
            var nuevo = usuario
        }
        usuario = localStorage.getItem("Nombre" + contador);
        
    }while(contador <= cantUsuarios)

    console.log(nuevo);

}

cantidadUsuarios();