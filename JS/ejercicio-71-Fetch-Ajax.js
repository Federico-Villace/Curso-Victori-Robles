'use strict'

window.addEventListener('load', ()=>{

var info = document.querySelector(".info"); 
var usuarios = [];

    fetch("https://reqres.in/api/users") // fetch recibe un link 
        .then(data => data.json())  // aguarda una promesa, en este caso se convierten los datos a json
        .then(users => {    //aguarda la segunda promesa, 

            usuarios = users.data;
            console.log(usuarios);
            
            usuarios.map((user, i) => {

                let datos = document.createElement("h3"); 
                datos.innerHTML = i + " - " + user.first_name+ " " + user.last_name; 
                info.appendChild(datos); 
            }); 

        });


});