'use strict'

window.addEventListener('load', ()=> {

// OBJETOS JSON 

    var objetojson = {
        nombre : "pepito",
        apellido : "perez",
        edad: 25
    }; 

    console.log(objetojson);
    
//ARRAY DE OBJETOS JSON 

    var arrayDeObjetos = [{nombre : "juan" , apellido : "perez" , edad : 25}, objetojson]; 

    console.log(arrayDeObjetos);

    var caja = document.querySelector("#caja");

    for (var i in arrayDeObjetos)
    {
        var p = document.createElement("p");
        p.append(arrayDeObjetos[i].apellido , " ");
        p.append(arrayDeObjetos[i].nombre, " ");
        p.append(arrayDeObjetos[i].edad, " ");
        caja.append(p); 

    }   

    
});