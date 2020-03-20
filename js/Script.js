function Valtot(e){
	var ing=(document.prime)? e.keyCode:e.which;
	if(ing==8) return true;
	var val=/[0-9\d.-]/;
	var tec = String.fromCharCode(ing);
	return val.test(tec);

}
function Valtot2(e){
	var ing=(document.segund)? e.keyCode:e.which;
	if(ing==8) return true;
	var val=/[0-9\d.-]/;
	var tec = String.fromCharCode(ing);
	return val.test(tec);
}
function calclar(){
	var uno= parseInt(document.formulario.prime.value);
	var dos= parseInt(document.formulario.segund.value);


	if(uno>dos){
		var mst=uno-dos;

	}
	if(uno==dos){
		var mst=uno*dos;

	}
	if(dos>uno){
		var mst=uno+dos;

	}
	document.formulario.most.value=mst+"";
}
