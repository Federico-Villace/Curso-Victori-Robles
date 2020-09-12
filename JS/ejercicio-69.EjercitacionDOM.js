'use strict'

window.addEventListener("load",()=>{
    
    var formulario = document.querySelector("#formulario");
    
    var box_2 = document.querySelector(".box2");

    box_2.style.display = "none";   
    //ocultar el contenido del box 2 


    formulario.addEventListener("submit", ()=>{

        var nombres = document.querySelector("#Nombres").value;
        var apellidos = document.querySelector("#Apellidos").value;
        var edad = document.querySelector("#Edad").value;

        box_2.style.display="block";

        var datos_usuario = [nombres, apellidos, edad]; 

        var i; 
        for (i in datos_usuario){
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[i]);   
            box_2.append(parrafo);
        }


    }); 
});