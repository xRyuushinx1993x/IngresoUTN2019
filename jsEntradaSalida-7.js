/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var num1;
    var num2;
    var resultado;

    num1 = document.getElementById("numeroUno").value;
    num1 = parseInt(num1);

    num2 = document.getElementById("numeroDos").value;
    num2 = parseInt(num2);

    resultado = num1 + num2;

    alert("La suma es " + resultado);

}

function restar()
{
    var num1;
    var num2;
    var resultado;

    num1 = document.getElementById("numeroUno").value;

    num2 = document.getElementById("numeroDos").value;

    resultado = num1 - num2;

    alert("La resta es " + resultado);
}

function multiplicar()
{ 
    var num1;
    var num2;
    var resultado;
    var mensaje;

    num1 = document.getElementById("numeroUno").value;

    num2 = document.getElementById("numeroDos").value;

    resultado = num1 * num2;

    mensaje = "La multiplicación es ";
    
    alert(mensaje + resultado);
}

function dividir()
{
    var num1;
    var num2;
    var resultado;
    var mensaje;

    num1 = document.getElementById("numeroUno").value;

    num2 = document.getElementById("numeroDos").value;

    resultado = num1 / num2;

    mensaje = "La división es "
    
    alert(mensaje + resultado);
}

