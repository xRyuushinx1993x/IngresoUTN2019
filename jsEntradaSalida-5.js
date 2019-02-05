/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostrar()
{	
	var nombre;
    var edad;
    var espacio;
    var mensaje1;
    var mensaje2;
    var mensaje3;

    nombre = document.getElementById("elNombre").value;
    edad = document.getElementById("laEdad").value;
    espacio = " ";
    mensaje1 = "Usted se llama "
    mensaje2 = "y tiene "
    mensaje3 = "años"

    alert (mensaje1 + nombre + espacio + mensaje2 + edad + espacio + mensaje3);
}

