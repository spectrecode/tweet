window.addEventListener("load", function() {
	var boton = document.getElementById("boton");
	boton.addEventListener("click", function() {

		var texto = document.getElementById("txt").value;
		var publicar = document.createElement("p");
		publicar.innerText = texto;

		var contenedor = document.getElementById("contenedor");
		var hermano = document.getElementById("hermano");
	 	contenedor.insertBefore(publicar,contenedor.childNodes[0]).classList.add("caja");
	});
});