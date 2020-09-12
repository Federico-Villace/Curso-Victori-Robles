'use strict'

window.addEventListener('load', ()=> {
    
    function intervalo(){

        var tiempo = setInterval(()=>{

            var encabezado = document.querySelector("h1");
            
    
            if (encabezado.style.fontSize == "20px")
            {
                encabezado.style.fontSize = "50px";
            }else 
            {
                encabezado.style.fontSize = "20px"; 
            }
    
        }, 1000);

     
        return tiempo;  
    }

    
    // podemos hacer algo similar con setTimeout que hara que se reproduzca solamente una vez en vez de una por x cantidad de tiempo 
    var stop = document.querySelector("#bparar");
    var start = document.querySelector("#bstart"); 
  
    var tiempo = intervalo(); 

    stop.addEventListener('click', ()=> {
      
        console.log("Haz presionado el boton parar"); 
        clearInterval(tiempo);
             
    }); 
    start.addEventListener("click", ()=> {
        console.log("Haz presionado el boton start");
        intervalo(); 
    });

});     