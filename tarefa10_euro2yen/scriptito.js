var volver = true;
while (volver == true) {

var producto = prompt("¿Que producto acabas de comprar? ");
var costo = prompt("¿Cuánto te costó ese producto? ");
var moneda = prompt("¿Que tipo de moneda usaste, euro o yen? ");

switch (moneda) {
	case "euro":
		var cambiomoneda = costo*139
		document.write("Producto: " + producto+"<hr>");
		document.write("Costo en Euros: " + costo+"<hr>");
		document.write("Costo en Yenes: " + cambiomoneda+"<hr>");
		volver = confirm("¿Tienes algún otro producto que quieras poner?")
		break;
	case "yen":
		var cambiomoneda = costo/139
		document.write("Producto: " + producto+"<hr>");
		document.write("Costo en Euros: " + cambiomoneda+"<hr>");
		document.write("Costo en Yenes: " + costo+"<hr>");
		volver = confirm("¿Tienes algún otro producto que quieras poner?")
		break;
	default:
		volver = confirm("No has elegido ninguna de las opciones¿Quieres volver a intentarlo?")
		break;
	}
}