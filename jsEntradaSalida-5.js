/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostrar()
{	
	var nombre;
    var edad;
    var espacio;

    nombre = document.getElementById("elNombre").value;
    edad = document.getElementById("laEdad").value;
    espacio = " ";

    alert (nombre + espacio  + edad);
}

