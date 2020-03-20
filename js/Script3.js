function Valhor(e){
	var ing=(document.horas)? e.keyCode:e.which;
	if(ing==8) return true;
	var val=/[0-9\d.]/;
	var tec = String.fromCharCode(ing);
	return val.test(tec);

}
function Valpag(e){
	var ing=(document.paga)? e.keyCode:e.which;
	if(ing==8) return true;  
	var val=/[0-9\d.]/;
	var tec = String.fromCharCode(ing);
	return val.test(tec);

}
function calcular2(){
	var hor=parseInt(document.formulario.horas.value);
	var pag=parseInt(document.formulario.paga.value);
	var mostrar=0;

	if(hor<41){
		var mostrar=mostrar+(hor*pag);
	}
	if(hor<49 && hor >40){
		var dif=49-hor;
		var mostrar=mostrar+(pag*40)+(dif*(pag*2));
	}
	if(hor>48){
		var dif2=hor-48;
		var mostrar= mostrar+((40*pag)+(8*(pag*2))+dif2*(pag*3));
	}

	document.formulario.most.value="$"+mostrar;


}