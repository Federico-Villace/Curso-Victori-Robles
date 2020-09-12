'use strict'

//EVENTOS 

//los eventos llevan como parametro, el nombre del evento y una funcion de callback 

//Evento load 
//evita tener que poner el script al final del html, y nos permite ponerlo en el head lo cual es lo recomendado 
// podemos expresarlo asi o para simplificar el codigo con la funcion flwcha 


/* window.addEventListener("load", function(){
}); */ 

window.addEventListener("load", () => {

    //declaracion de boton e input 
    var boton = document.querySelector("#boton");
    var input = document.querySelector("#input_nombre")
  

    // funciones 

    function cambiarColor(){

        console.log("click");

        var bg = boton.style.background; 

        if (bg == "red"){
            boton.style.background = "green"; 
        }else {
            boton.style.background = "red" ; 
        }
        return true; 
    }

    // eventos boton 

    boton.addEventListener("click", function(){

        cambiarColor(); 

    }); 

    boton.addEventListener("mouseover", ()=> {

       boton.style.background = "yellow"; 

    });

    boton.addEventListener("mouseout", ()=> {

        boton.style.background = "#ccc"; 
 
     });
 

    // eventos inout 

    input.addEventListener ("focus", ()=> {

        console.log("estas dentro del input");

    }); 

    input.addEventListener("blur", () => {

        console.log("estas fuera del input"); 

    });

    input.addEventListener("keydown", (event)=> {

        console.log("la tecla ", String.fromCharCode(event.keyCode), "fue presionada"); 
        // se puede hacer el mismo evento con keypress 
    }); 
    

}); 

