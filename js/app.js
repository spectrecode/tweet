window.addEventListener("load", function() {
	var boton = document.getElementById("boton");
	boton.disabled = true;
	boton.addEventListener("click", function(e) {
		e.preventDefault();

		var texto = document.getElementById("txt");
		var cajaTexto = texto.value;
		agregarMensaje(cajaTexto);
		texto.value = "";	
	});
	function agregarMensaje(texto) {
		var publicar = document.createElement("div");
		publicar.innerText = texto;
		var contenedor = document.getElementById("contenedor");
	 	contenedor.insertBefore(publicar,contenedor.childNodes[0]).classList.add("caja");
	}
	
	var textArea = document.getElementById("txt");
	textArea.addEventListener("keydown", function() {
		boton.disabled = false;
	}) 
});