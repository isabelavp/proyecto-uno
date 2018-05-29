function myAgeFunction() {
  var age = prompt("¡Ingresa tu edad");
    if(age > 0 && age <= 2){
	document.getElementById("demo").innerHTML = "eres un toddler";
     } else if(age > 2 && age <= 5){
	document.getElementById("demo").innerHTML = "eres un preschooler";
     } else if(age >= 6 && age <=12){
	document.getElementById("demo").innerHTML = "eres un gradeschooler";
     } else if(age >= 13 && age < 18){
	document.getElementById("demo").innerHTML = "eres un teenager";
     } else if(age >= 18 && age <= 30){
	document.getElementById("demo").innerHTML = "eres un young adult";
     } else if(age > 30 && age < 100){
	document.getElementById("demo").innerHTML = "eres un adult";
     } else {
     	document.getElementById("demo").innerHTML = "este dato es un error"
     }
}



