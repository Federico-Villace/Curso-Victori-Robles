var divs = document.getElementsByTagName('div');

console.log(divs[0].innerHTML); 
console.log(divs);

//se puede cambiar el contenido del elemento del array muy simplemente 
console.log(divs[1].innerHTML);

divs[1].innerHTML = "este es el nuevo contenido del array en la posicion 1."; 

console.log(divs[1].innerHTML);


// seleccion de elemento con id 

var ID1 = document.getElementsByClassName("practicaID"); //lo trae como coleccion html por mas que sea un solo elemento
console.log(ID1);

for (var i in ID1){
    if (ID1[i].className == "practicaID"){
        ID1[i].style.background = "green";
    }
    
}

console.log(ID1);

// creacion de un elemento 
var hr = document.createElement("hr");

// creacion de variables para introducir el objeto creado 

var p = document.querySelector(".parrafo"); 

// aplicacion del elemento creado 

p.append(hr);

//seleccion multiple y modificacion por id 

var IDs = document.getElementsByClassName("div2");
var i; 

for (i in IDs){

    if (IDs[i].className == "div2" ){
        IDs[i].style.background = "yellow";
        IDs[i].style.padding = "10px";
    }
}

var division = document.querySelector("#division");
division.append(hr);


//seleccion de varios elementos con quertsSelectorAll
// devuelve una nodelist con los elementos y la cantidad de elementos que la componen 

var all = document.querySelectorAll("div");

console.log("este es es query selector all: ", all); 