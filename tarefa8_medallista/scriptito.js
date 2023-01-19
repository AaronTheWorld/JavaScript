function medalla(i) {
    if (i == 1){
    	document.write("¡Has quedado primero, ENHORABUENA!");
    } else if (i == 2){
    	document.write("¡Has quedado segundo, casi lo logras!");
    } else if (i == 3){
    	document.write("¡Has quedado tercero, estuviste cerca!");
    } else {
    	document.write("No has quedado en el podio, más suerte la próxima vez :(");
    }
}
var posicion = prompt("¿Como has quedado en la carrera? ");
medalla(posicion)