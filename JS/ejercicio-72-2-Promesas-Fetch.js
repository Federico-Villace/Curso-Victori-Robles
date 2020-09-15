'use strict'

window.addEventListener('load', function() {

    var UsuarioEspecifico = document.querySelector('#UsuarioEspecifico'); 
    var Usuarios = document.querySelector("#caja"); 

// promesas 
    get_Usuario()
        .then(function (data) {
            return data.json(); 
        })
        .then(function(user){
            muestra_Usuario(user.data);
        })

    get_Usuarios()
        .then(function(data) {
            return data.json(); 
        })
        .then(function(user){
            muestra_Usuarios(user.data); 
        })
        
// get         
    function get_Usuario()
    {
        return fetch("https://reqres.in/api/users/2"); 
    }

    function get_Usuarios()
    {
        return fetch("https://reqres.in/api/users?page=2"); 
    }

// metodos 
    function muestra_Usuario(user)
    {
        let datos = document.createElement("h3");
        datos.innerHTML = user.first_name + " " + user.last_name; 
        UsuarioEspecifico.append(datos);
        document.querySelector("#UsuarioEspecifico .loading").style.display = "none"; 
    }

    function muestra_Usuarios(users)
    {         
        users.forEach(function(users)  
        {
            let datos = document.createElement("h3");
            datos.innerHTML = "Nombre: " + users.first_name + " - Apellido: " + users.last_name + " - Mail:" + users.email; 
            Usuarios.append(datos); 
        });   
        document.querySelector("#caja .loading").style.display = "none"; 
    }

// MISMO EJERCICIO QUE EL 72-1 PERO ESTE ESTA REALIZDO CON LA SINTAXIS MAS LARGA DE LAS FUNCIONES DE CALLBACK 
}); 