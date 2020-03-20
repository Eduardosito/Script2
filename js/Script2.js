function Valpri(e){
	var ing=(document.primero)? e.keyCode:e.which;
	if(ing==8) return true;
	var val=/[0-9\d.-]/;
	var tec = String.fromCharCode(ing);
	return val.test(tec);

}
function Valseg(e){
	var ing=(document.segundo)? e.keyCode:e.which;
	if(ing==8) return true;
	var val=/[0-9\d.-]/;
	var tec = String.fromCharCode(ing);
	return val.test(tec);

}
function Valter(e){
	var ing=(document.tercero)? e.keyCode:e.which;
	if(ing==8) return true;
	var val=/[0-9\d.-]/;
	var tec = String.fromCharCode(ing);
	return val.test(tec);

}
function calcular(){
	var mos=0;
	var pri=parseInt(document.formulario.primero.value);
	var seg=parseInt(document.formulario.segundo.value);
	var ter=parseInt(document.formulario.tercero.value);

	if(pri>seg){
		if(pri>ter){
			var mos=mos+pri;
		}
	}
	if(seg>pri){
		if(seg>ter){
			var mos=mos+seg;

		}
	}
	if(ter>pri){
		if(ter> seg){
			var mos=mos+ter;

		}

	}
	document.formulario.mostrar.value=mos+"";

}