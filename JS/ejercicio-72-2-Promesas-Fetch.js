'use strict'

window.addEventListener('load', function() {

    var UsuarioEspecifico = document.querySelector('#UsuarioEspecifico'); 


    get_Usuario()
        .then(function (data) {
            return data.json(); 
        })
        .then(function(user){
            muestra_Usuario(user.data);
        })

    function get_Usuario(){
        return fetch("https://reqres.in/api/users/2"); 
    }

    function muestra_Usuario(user){

        var datos = document.createElement("h3");
        datos.innerHTML = user.first_name + " " + user.last_name; 
        UsuarioEspecifico.append(datos);
        document.querySelector("#UsuarioEspecifico .loading").style.display = "none"; 

    }

    // MISMO EJERCICIO QUE EL 72-1 PERO ESTE ESTA REALIZDO CON LA SINTAXIS MAS LARGA DE LAS FUNCIONES DE CALLBACK 
}); 