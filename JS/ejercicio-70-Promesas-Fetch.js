'use strict'

window.addEventListener('load', ()=>{

var info = document.querySelector(".info"); 
var loading = document.querySelector(".loading");
var usuarios = [];//definimos el array 


    fetch("https://reqres.in/api/users") // fetch recibe un link 
        .then(datajson => datajson.json())  // aguarda una promesa, en este caso se convierten los datos a json
        .then(users => {    //aguarda la segunda promesa, pasamos por parametro lo que queramos usar 
           
            usuarios = users.data;      //le damos como valor lo que se encuentre dentro de la seccion que queramos de json users.data users.ad etc
 
            console.log(users);
            console.log(usuarios);
            
            usuarios.map((user, i) => {

                let datos = document.createElement("h3"); 
                datos.innerHTML = i + " - " + user.first_name+ " " + user.last_name; 
                info.appendChild(datos); 
            }); 

        loading.style.display = "none";          
        });
       

});