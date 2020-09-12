'use strict'

//Introduccion al DOM 

function cambiarColor(color){

    practicasID.style.background = color ;  
}

function cambiaPad (padding){
    practicasID.style.padding = padding; 
}

// var practicaID = document.getElementById("practicaID");

var practicasID = document.querySelector("#practicaID") //seleccionamos como si fuese css # para div, * para clases 

console.log(practicasID.innerHTML);