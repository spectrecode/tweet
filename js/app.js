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
			resize();
			agregarHora();
		});

	function agregarHora(){
		var fecha = new Date();
		var hora = fecha.getHours();
		var minuto = fecha.getMinutes();
			if (minuto < 10) {
				minuto = "0" + minuto;
			}
		var horaImprimible = hora + " : " + minuto;
		
		var horario = document.createElement("div");
       	horario.innerText = horaImprimible;
       	var contenedor = document.getElementById("contenedor");
       	contenedor.insertBefore(horario, contenedor.childNodes[0]).classList.add("horaBox");
	}

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

	/*	textArea.addEventListener("keyup", function(e) {
			if (e.keyCode == 13) {
				var row = parseInt(this.getAttribute("rows"));
				this.setAttribute("rows", row + 1);
			}
		}) */
		var area = document.querySelector("textArea");
		area.addEventListener('keydown', autosize);
             
	function autosize(){
  		var text = this;
  		setTimeout(function(){
    		text.style.cssText = 'height:auto; padding:';
    // for box-sizing other than "content-box" use:
    // el.style.cssText = '-moz-box-sizing:content-box';
    		text.style.cssText = 'height:' + text.scrollHeight + 'px';
  		},0);
	}
	
	function resize() {
       textArea.style.cssText = "height: auto";
   	}

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