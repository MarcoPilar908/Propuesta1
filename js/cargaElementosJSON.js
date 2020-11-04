  	
	var obj1 = 
	'{"estado":"Triste","descripcion":"Te sientes melancólico y propenso a sentir nostalgia", "imagen":"https://image.shutterstock.com/image-vector/racoon-emotional-head-vector-illustration-600w-1050190388.jpg"}';
	var obj2 =
	'{"estado":"Audaz","descripcion":"Emprendez acciones poco comunes sin temer las dificultades o el riesgo que implican", "imagen":"https://image.shutterstock.com/image-vector/racoon-emotional-head-vector-illustration-600w-1051212956.jpg"}';
	var obj3 =
	'{"estado":"Alegre","descripcion":"Tienes sensación de satisfacción o felicidad", "imagen":"https://image.shutterstock.com/image-vector/racoon-emotional-head-vector-illustration-600w-1050189173.jpg"}';
	var obj4 =
	'{"estado":"Dormilón","descripcion":"Cuesta mucho trabajo mantenerse despierto", "imagen":"https://image.shutterstock.com/image-vector/racoon-emotional-head-vector-illustration-600w-1055233775.jpg"}';
	var obj5 =
	'{"estado":"Enojado","descripcion":"Enfado, causado por una falta de obediencia, de obligación o de respeto", "imagen":"https://image.shutterstock.com/image-vector/racoon-emotional-head-vector-illustration-600w-1055233004.jpg"}';
	var obj6 =
	'{"estado":"Perspicaz","descripcion":"Percatarse de cosas que pasan inadvertidas para los demás", "imagen":"https://image.shutterstock.com/image-illustration/racoon-emotional-head-illustration-cute-600w-1057846709.jpg"}';
	var obj7 =
	'{"estado":"Nervioso","descripcion":"Te sientes incómodo bajo cierta situación", "imagen":"https://image.shutterstock.com/image-illustration/racoon-emotional-head-illustration-cute-600w-1055232905.jpg"}';


var boton = document.getElementById("triste");
boton.onclick = function(){
   	var myObj1 = JSON.parse(obj1);
	document.getElementById("sentimiento").innerHTML = myObj1.estado;
	document.getElementById("descripcion").innerHTML = myObj1.descripcion;
	var imagen = document.getElementById("imagen");
	imagen.setAttribute("src",myObj1.imagen);
}
var boton = document.getElementById("audaz");
boton.onclick = function(){
   	var myObj1 = JSON.parse(obj2);
	document.getElementById("sentimiento").innerHTML = myObj1.estado;
	document.getElementById("descripcion").innerHTML = myObj1.descripcion;
	var imagen = document.getElementById("imagen");
	imagen.setAttribute("src",myObj1.imagen);
}
var boton = document.getElementById("alegre");
boton.onclick = function(){
   	var myObj1 = JSON.parse(obj3);
	document.getElementById("sentimiento").innerHTML = myObj1.estado;
	document.getElementById("descripcion").innerHTML = myObj1.descripcion;
	var imagen = document.getElementById("imagen");
	imagen.setAttribute("src",myObj1.imagen);
}
var boton = document.getElementById("dormilon");
boton.onclick = function(){
   	var myObj1 = JSON.parse(obj4);
	document.getElementById("sentimiento").innerHTML = myObj1.estado;
	document.getElementById("descripcion").innerHTML = myObj1.descripcion;
	var imagen = document.getElementById("imagen");
	imagen.setAttribute("src",myObj1.imagen);
}
var boton = document.getElementById("enojado");
boton.onclick = function(){
   	var myObj1 = JSON.parse(obj5);
	document.getElementById("sentimiento").innerHTML = myObj1.estado;
	document.getElementById("descripcion").innerHTML = myObj1.descripcion;
	var imagen = document.getElementById("imagen");
	imagen.setAttribute("src",myObj1.imagen);
}
var boton = document.getElementById("perspicaz");
boton.onclick = function(){
   	var myObj1 = JSON.parse(obj6);
	document.getElementById("sentimiento").innerHTML = myObj1.estado;
	document.getElementById("descripcion").innerHTML = myObj1.descripcion;
	var imagen = document.getElementById("imagen");
	imagen.setAttribute("src",myObj1.imagen);
}
var boton = document.getElementById("nervioso");
boton.onclick = function(){
   	var myObj1 = JSON.parse(obj7);
	document.getElementById("sentimiento").innerHTML = myObj1.estado;
	document.getElementById("descripcion").innerHTML = myObj1.descripcion;
	var imagen = document.getElementById("imagen");
	imagen.setAttribute("src",myObj1.imagen);
}