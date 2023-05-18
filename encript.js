function encrip(elemento){
	var palabra  = document.getElementsByTagName("input")[0].value; 
	var palabra_codificada = cifrar (palabra);
	document.getElementById("resultado").innerHTML = palabra_codificada;


 }

	
    function desens(elemento){
		var palabra = document.getElementsByTagName("input")[0].value;
		var palabra_descodificada = descifrar(palabra);
		document.getElementById("resultado").innerHTML = palabra_descodificada;
		  }

    function copyText() {
        // Obtener el elemento que contiene el texto
        var text = document.querySelector('p');
          
        // Crear un rango de selección
        var range = document.createRange();
        range.selectNode(text);
          
        // Seleccionar el rango
        window.getSelection().removeAllRanges(); // deseleccionar lo que haya seleccionado antes
        window.getSelection().addRange(range);
          
        // Copiar el texto seleccionado al portapapeles
        document.execCommand('copy');
          
        // Desseleccionar el texto
        window.getSelection().removeAllRanges();
          }
    

 

 function cifrar(string){ // creamos una funcion que reciba el string
	 let newStr = ''; // creamos una variable para guardar el string cifrado
 
	 for(let i = 0; i < string.length; i++){ // creamos un for para recorrer cada caracter del string
 
		 if(string[i] === 'e'){ // si el caracter es e
			 newStr += 'enter'; // remplazalo por enter
		 }
		 else if(string[i] === 'i'){ // si el caracter es i
			 newStr += 'imes'; // remplazalo por imes
		 }
		 else if(string[i] === 'a'){ // si el caracter es a
			 newStr += 'ai'; // remplazalo por ai
		 }
		 else if(string[i] === 'o'){ // si el caracter es o
			 newStr += 'ober'; // remplazalo por ober
		 }
		 else if(string[i] === 'u'){ // si el caracter es u
			 newStr += 'ufat'; // remplazalo por ufat
		 }
		 else{ // si no se cumple ninguna de las condiciones anteriores
			 newStr += string[i]; // vuelve a agregar el caracter al string
		 }
	 }
	 return newStr; // retornamos el string cifrado
 }
  // imprimimos el string cifrado

 function descifrar(string){
    let newStr = ''; // cadena vacia en la que iremos almacenando el resultado

    for(let i = 0; i < string.length; i++){

        if(string[i] === 'e' && string[i + 4] === 'r'){ // si el caracter es 'e' y 4 caracteres despues encontramos 'r'
            newStr += 'e'; // agregamos 'e' a newStr
            i += 4; // siguente
        }
        else if(string[i] === 'i' && string[i + 3] === 's'){ // si el caracter es 'i' y 3 caracteres despues encontramos 's'
            newStr += 'i'; // agregamos 'i' a newStr
            i += 3;
        }
        else if(string[i] === 'a' && string[i + 1] === 'i'){
            newStr += 'a';
            i += 1;
        }
        else if(string[i] === 'o' && string[i + 3] === 'r'){
            newStr += 'o';
            i += 3;
        }
        else if(string[i] === 'u' && string[i + 3] === 't'){
            newStr += 'u';
            i += 3;
        }
        else{ // si no se cumple ninguna de las condiciones anteriores
            newStr += string[i]; // volvemos a agregar el caracter a newStr
        }
    }
    return newStr;
}

