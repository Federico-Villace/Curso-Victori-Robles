'use strict'


// BOM - browser object model - 
// podemos busar y solicitar diferente informaion del buscador 
var ventana = screen.height; 

console.log(ventana);

function getBOM() {
    console.log(screen.width);
    console.log(screen.height);
    console.log(window.location);
}

function redirect(url){
    window.location.href = url;
}

function abrirVentana(url){
    window.open(url, "", "width = 100ppx, height = 100px");
}

getBOM();