/*
Exercise #1: A Person Object
Part 1 Javascript
Create a class called Person 
which accepts the name of a person as a string,
 and his/her/their age as a number.

The Person class should have a method called 
Describe which returns a string with the f
ollowing syntax: "name, age years old".

For example, 
if Manny is 19 years old the function 
Describe of his object will return "Manny, 19 years old".
*/
// Asi se hacen las clases
class persona {
    Nombre = "Nombre";
    edad   = "Edad"
}
// CONVIERTE HTML A JAVASCRIPT
document.getElementById("myButton").onclick = function(){
    persona.Nombre= document.getElementById("Nombre").value;
    persona.Edad= document.getElementById("Edad").value;
    console.log(persona.Nombre,", ",persona.Edad,"years old")
    alert(persona.Nombre + ", "+ persona.Edad + " years old")
}
// asi se ingresa nombre
/*
persona.Nombre= prompt("ingrese su nombre ");
persona.edad = prompt("Ingrese edad ")
Number(persona.edad)


alert(persona.Nombre + ", "+ persona.edad+ " years old")
*/