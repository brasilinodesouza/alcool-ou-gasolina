

	function validar(){
		var alcool = document.getElementById("alcool");
		var gasolina = document.getElementById("gasolina");
		var resultado = (alcool.value / gasolina.value);
		
		
		if(alcool.value == ""){
			alert("Informe um valor válido");
			return false;
		}
		else if(alcool.value.indexOf(".") == -1){
			alert("Coloque o valor do alcool usando o PONTO");
			return false;
		}
		else if(gasolina.value == ""){
			alert("Informe um valor válido");
			return false;
		}
		else if(gasolina.value.indexOf(".") == -1){
			alert("Coloque o valor da gasolina usando o PONTO");
			return false;
		}
	
		else if (resultado < 0.7 ){
			alert("O Recomendado é Alcool")
			return false;
		}
		else if (resultado > 0.7 ){
			alert("O Recomendado é Gasolina")
			return false;
		}




	}

	