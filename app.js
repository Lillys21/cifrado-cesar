//Crear una funcion llamada cipher que cifre el texto ingresado//
function cipher(){

  var sentence = prompt("Ingrese la frase a cifrar"); //Pedir al usuario que introduzca la frase a cifrar.

  var encryp = "";

     for(var i=0; i<sentence.length; i++) { //El ciclo for recorrera las letras del texto a cifrar.

        if (parseInt(sentence[i])%1 === 0) //Condicional para no ingresar numeros.
           sentence = prompt("Por favor ingrese un texto sin numeros ni espacios");

       //En esta parte del codigo es donde se encripta la frase introducida por el usuario.
        var cesarLocation=(sentence.charCodeAt(i) - 65 + 33) % 26 + 65; // Devuelve el numero indicando el valor del caracter en el indice de la propiedad.
        var encrypWord= String.fromCharCode(cesarLocation); //Devuelve una cadena cerrada mediante el uso  de una secuencia de valores.

    encryp += encrypWord; //Acumula o guarda las letras cifradas.
    }

    return encryp; //Regresa el valor cifrado o encriptado.
}

// Crear una funcion llamada decipher que descifre el texto ingresado.
function decipher(encryp){

  alert ("Palabra Cifrada: " + encryp);//Devuelve la frase encriptada que el usuario introdujo.

  var desEncryp ="";

    for(var j=0; j<encryp.length; j++) { //El for recorrera las letras del texto a descifrar.

   //En esta parte del codigo es donde se desencripta la frase introducida por el usuario.
       var desEncrypLocation = (encryp.charCodeAt(j) + 65 - 33) % 26 + 65; // Devuelve el numero indicando el valor del caracter en el indice de la propiedad.
       var desEncrypWord= String.fromCharCode(desEncrypLocation); //Devuelve una cadena cerrada mediante el uso  de una secuencia de valores.

   desEncryp+=desEncrypWord; //Acumula o guarda las letras descifradas.
}

return desEncryp;  //Regresa el valor descifrado o desencriptado.

}

decipher(cipher()); //Se invoca a la función para descifrar.
