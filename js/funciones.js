$(()=>{
	var tiempo = 12;
	var contador = 0;
	var circulos = $(".circulo");
	var timer = $(".timer");
	var modal = $(".modal");
	var botonModal = $(".modal a");
	var timerJuego = null;
	var subirNivel = false;

	function juego(tiempo){
		//setting inicial
		contador = 0;
		modal.removeClass("visible");
		$(".eliminado").removeClass("eliminado");
		timer.find("span").remove();
		for(var i = 0; i < tiempo; i++){
			timer.append($("<span>").css("width",`calc(${100/tiempo}% - 10px)`));
		}

		timerJuego = setInterval(()=>{
			if(timer.find("span").length > 1){
				timer.children().last().remove();
			}else{
				timer.children().last().remove();
				clearInterval(timerJuego);
				//console.log("KO!!!");
				subirNivel = false;
				modal.find("h2").html(":-(");
				modal.addClass("visible");
			}
		},1000);
	}

	juego(tiempo);

	botonModal.click(evento => {
		evento.preventDefault();
		subirNivel ? tiempo-- : null;
		juego(tiempo);
	});
	
	circulos.click(function(evento){
		evento.preventDefault();
		$(this).addClass("eliminado");
		contador++;
		if(contador == 12){
			clearInterval(timerJuego);
			//console.log("SOY PROGRAMADOR!!!");
			subirNivel = true;
			modal.find("h2").html(":-)");
			modal.addClass("visible");
		}
	});
});