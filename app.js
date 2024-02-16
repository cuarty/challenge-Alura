
let textoSalida = "";

//Esta función convierte el texto que le coloquemos en una lista;
function convertirTexto(){
    let textoEntrada = document.getElementById("texto").value;
    let listaDeCaracteres = textoEntrada.split("");
    return listaDeCaracteres;
}


function encriptarTexto(){
    let listaDeCaracteres = convertirTexto();
    let textoErroneo = false;
    let acentuados = /[áéíóú]/;
    let textoEncriptado;
    //Por medio de un for recorro la lista y si un caracter coincide con una encriptación, reemplazo su espacio de la lista con el encriptado;
    for(let i = 0; i< listaDeCaracteres.length; i++) {
        if(listaDeCaracteres[i] >= "A" && listaDeCaracteres[i] <= "Z" || acentuados.test(listaDeCaracteres[i])){
            textoErroneo = true;
        } else if(listaDeCaracteres[i] == "a"){
            listaDeCaracteres[i]= "ai";
        } else if (listaDeCaracteres[i] == "e"){
            listaDeCaracteres[i]= "enter";
        } else if (listaDeCaracteres[i] == "i"){
            listaDeCaracteres[i]= "imes";
        } else if (listaDeCaracteres[i] == "o"){
            listaDeCaracteres[i]= "ober";
        } else if (listaDeCaracteres[i] == "u"){
            listaDeCaracteres[i]= "ufat";
        }
    }

    if (textoErroneo == true){
        textoEncriptado = "Recuerde que el texto a encriptar no debe contener mayúsculas ni acentos. Inténtelo de nuevo...";
        textoSalida = "";
    } else {
        textoEncriptado = listaDeCaracteres.join("");
        textoSalida = textoEncriptado;
    }
    
    return textoEncriptado;
   
}


function desencriptarTexto(){
    let listaDeCaracteres = convertirTexto();
    let listaNuevaDeCaracteres = [];
    let textoErroneo = false;
    let acentuados = /[áéíóú]/;
    let textoDesencriptado;

    //Con este for recorro la lista, en este caso, por medio de condicionales corroboro que se cumpla la secuencia de encriptación, y si es así lo reemplazo por la letra correspondiente en una nueva lista;
    for(let i = 0; i< listaDeCaracteres.length; i++){
        if(listaDeCaracteres[i] >= "A" && listaDeCaracteres[i] <= "Z" || acentuados.test(listaDeCaracteres[i])){
            textoErroneo = true;
        } else if (listaDeCaracteres[i] == "a" && listaDeCaracteres[i + 1] == "i"){
            listaNuevaDeCaracteres.push("a");
            listaDeCaracteres.splice(i, 2);
            i=i-1;
        } else if (listaDeCaracteres[i] == "e" && listaDeCaracteres[i + 1] == "n" && listaDeCaracteres[i + 2] == "t" && listaDeCaracteres[i + 3] == "e" && listaDeCaracteres[i + 4] == "r"){
            listaNuevaDeCaracteres.push("e");
            //Con la función splice, elimino de la lista original todo el encriptado para que cuando se repita el ciclo no evalúe esas palabras;
            listaDeCaracteres.splice(i, 5);
            i=i-1;
        } else if (listaDeCaracteres[i] == "i" && listaDeCaracteres[i + 1] == "m" && listaDeCaracteres[i + 2] == "e" && listaDeCaracteres[i + 3] == "s"){
            listaNuevaDeCaracteres.push("i"); 
            listaDeCaracteres.splice(i, 4);
            i=i-1;
        } else if (listaDeCaracteres[i] == "o" && listaDeCaracteres[i + 1] == "b" && listaDeCaracteres[i + 2] == "e" && listaDeCaracteres[i + 3] == "r"){
            listaNuevaDeCaracteres.push("o");
            listaDeCaracteres.splice(i, 4);
            i=i-1;
        } else if (listaDeCaracteres[i] == "u" && listaDeCaracteres[i + 1] == "f" && listaDeCaracteres[i + 2] == "a" && listaDeCaracteres[i + 3] == "t"){
            listaNuevaDeCaracteres.push("u");
            listaDeCaracteres.splice(i, 4);
            i=i-1;
        } else {
            listaNuevaDeCaracteres.push(listaDeCaracteres[i]);
        }
    }

    if (textoErroneo == true){
        textoDesencriptado = "Recuerde que el texto a encriptar no debe contener mayúsculas ni acentos. Inténtelo de nuevo...";
        textoSalida = "";
    } else {
        textoDesencriptado = listaNuevaDeCaracteres.join("");
        textoSalida = textoDesencriptado;
    }

    return textoDesencriptado;
}

//Esta es la función onclick del button "encriptar";
function encriptar(){    

    document.getElementById("muñeco").style.display = "none";
    document.getElementById("textoRevelado").style.display = "inline-block";
    document.querySelector("#fila2-col2 button").style.display = "inline";

    let elementoHTML = document.getElementById("textoRevelado");
    elementoHTML.innerHTML= encriptarTexto();
    
}

//Esta es la función onclick del button "desencriptar";
function desencriptar(){

    document.getElementById("muñeco").style.display = "none";
    document.getElementById("textoRevelado").style.display="inline-block";
    document.querySelector("#fila2-col2 button").style.display = "inline";

    let elementoHTML = document.getElementById("textoRevelado");
    elementoHTML.innerHTML= desencriptarTexto();
}

//Esta es la función onclick del button "copiar";
function textoACopiar(){
    
    navigator.clipboard.writeText(textoSalida).then (function(){
        console.log("Texto copiado al portapapeles: " + textoSalida);
    }, function(err) {
        console.error("Error al copiar el texto al portapapeles: " , err)
    });

    
}