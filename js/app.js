window.addEventListener("load", function() {
	var boton = document.getElementById("boton");
	var texto = document.getElementById("txt");
	var textArea = document.getElementById("txt");
	var contador = document.getElementById("contador");
	var caracteres = contador.innerHTML = 140;

		boton.addEventListener("click", function(e) {
			e.preventDefault();
			var cajaTexto = texto.value;
			agregarMensaje(cajaTexto);
			texto.value = "";
			contador.innerHTML = 140;
			boton.disabled = true;
		});

	function agregarMensaje(texto) {
		var publicar = document.createElement("div");
		publicar.innerText = texto;
		var contenedor = document.getElementById("contenedor");
	 	contenedor.insertBefore(publicar,contenedor.childNodes[0]).classList.add("caja");
	}
	
		textArea.addEventListener("keydown", function() {
			boton.disabled = false;
			var longitud = textArea.value.length;

			contar(longitud);
			cambioColor(longitud);
		});

	function contar(longitud) {
		if (longitud <= caracteres) {
			contador.innerHTML = caracteres - longitud;
		} else {
			contador.innerHTML = caracteres - longitud;
			boton.disabled = true;
		}
		if (longitud == 0) {
			boton.disabled = true;						
		}
	}

	function cambioColor(longitud) {
		if (longitud > 120) {
			contador.classList.add("colorUno")
		} else {
			contador.classList.remove("colorUno")
		}

		if (longitud > 130) {
			contador.classList.add("colorDos")
		} else {
			contador.classList.remove("colorDos")
		}
	} 
});