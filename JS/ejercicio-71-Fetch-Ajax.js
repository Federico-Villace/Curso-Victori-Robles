'use strict'

window.addEventListener('load', ()=>{

var info = document.querySelector(".info"); 
var UsuarioEspecifico = document.querySelector("#UsuarioEspecifico"); 

// Promesas 
    get_Usuarios()
            .then(datajson => datajson.json())  
            .then(users => {   
            listadoUsuarios(users.data); 
        
            }); 
    get_UsuarioEspecifico()
            .then(data => data.json())
            .then(user => {
            mostrarUsuario(user.data);
            })
   

// get 
function get_UsuarioEspecifico(){
    return fetch("https://reqres.in/api/users/2");
}

function get_Usuarios(){
    return fetch("https://reqres.in/api/users");
}


// metodos
function mostrarUsuario(user)
{
    let datos = document.createElement("h3");
    let avatar = document.createElement("img");
    datos.innerHTML = user.first_name + " " + user.last_name;
    avatar.src = user.avatar;   

    UsuarioEspecifico.appendChild(avatar);
    UsuarioEspecifico.appendChild(datos);
    
    document.querySelector("#UsuarioEspecifico .loading").style.display = "none";    
}

function listadoUsuarios(usuarios)
{
    usuarios.map((user, i) => {
        let datos = document.createElement("h3"); 
        datos.innerHTML = i + " - " + user.first_name+ " " + user.last_name; 
        info.appendChild(datos); 
    });
    document.querySelector(".loading").style.display = "none";    
}
 
});  
