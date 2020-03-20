function Valaño(e){
	var ing=(document.años)? e.keyCode:e.which;
	if(ing==8) return true;  
	var val=/[0-9\d]/;
	var tec = String.fromCharCode(ing);
	return val.test(tec);


}
function Valmes(e){
	var ing=(document.meses)? e.keyCode:e.which;
	if(ing==8) return true;  
	var val=/[0-9\d]/;
	var tec = String.fromCharCode(ing);
	return val.test(tec);

}
function Valsal(e){
	var ing=(document.salario)? e.keyCode:e.which;
	if(ing==8) return true;  
	var val=/[0-9\d.]/;
	var tec = String.fromCharCode(ing);
	return val.test(tec);
}
function validar(){

		if(document.formulario.salario.value==""){
			alert("HUBO UN ERROR, EN EL CAMPO DE LLANr el salario")
			document.formulario.salario.value="";
		}
		if(document.formulario.años.value==""){
		alert("HUBO UN ERROR, EN EL CAMPO DE LLANAR AÑOS")
		document.formulario.años.value="";
		}
		if(document.formulario.meses.value==""){
			alert("HUBO UN ERROR, EN EL CAMPO DE LLANAR meses")
			document.formulario.meses.value="";

		}else{
			meses5=parseInt(document.formulario.meses.value);
			if(meses5>12 || meses5<0){

				alert("El campo de llenar meses tiene un error")
				alert("Los meses tienen que ser maximo 20")
				document.formulario.meses.value="";

			}else{
				Calcular3();
			}
		}
	
}
function Calcular3(){
	alert("hola")
	var sal=parseInt(document.formulario.salario.value);
	var mes=parseInt(document.formulario.meses.value);
	var añox=parseInt(document.formulario.años.value);
	var cuenta_de_años=0;
	if(mes==12 && añox==0){
		cuenta_de_años=cuenta_de_años+1;
		cuentas(cuenta_de_años,sal);
	}else{
		cuenta_de_años=cuenta_de_años+añox;
		cuentas(cuenta_de_años,sal);
	}

}
function cuentas(cuenta_de_años,sal){
	alert("hola 2")
	if(cuenta_de_años<1){
		var prin=sal*0.05;
		document.formulario.most.value="$"+prin+" es lo que recibiras por comicion";
	}else{
		if(cuenta_de_años>=1 && cuenta_de_años<2){
			var prin2=sal*0.07;
			document.formulario.most.value="$"+prin2+" es lo que recibiras por comicion";
		}
		else{
			if(cuenta_de_años>=2 && cuenta_de_años<5){
				var prin3=sal*0.1;
				document.formulario.most.value="$"+prin3+" es lo que recibiras por comicion";
			}else{
				if(cuenta_de_años>=5 && cuenta_de_años<10){
					var prin4=sal*0.15;
					document.formulario.most.value="$"+prin4+" es lo que recibiras por comicion";

				}else{
					var prin5=sal*0.2;
					document.formulario.most.value="$"+prin5+" es lo que recibiras por comicion";


				}
			}
		}
	}
}