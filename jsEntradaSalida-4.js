/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostrar()
{
	var nombre;

	nombre = prompt("ingrese su nombre")

	document.getElementById("elNombre").value = nombre;
}

