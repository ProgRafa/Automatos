

var setAlphabetCombo = function(){
	var btnGroup = document.createElement('div');
	var btn;
	var chk;
	btnGroup.className = 'btn-group btn-group-ajuste shadow-dark';
	btnGroup.setAttribute('data-toggle', 'buttons');
	for(var i in ALPHABET){
		btn = document.createElement('label');
		chk = document.createElement('input');
		btn.className = 'btn btn-primary btn-ajuste';
		btn.innerText = ALPHABET[i];
		chk.type = 'checkbox';
		chk.value = ALPHABET[i];
		chk.name = 'symbol';
		btn.append(chk);
		btn.addEventListener('click', btnActive);
		btnGroup.append(btn);
	}
	
	getById('alphabetData').append(btnGroup);
}

var clickInLine = function(){
	svg.removeLine(this);
}

var prosseguirOnClick = function(){
	svg.destroyFreeCells();
	svg.elementDraggableOff();
	document.body.removeEventListener('keydown', SVGraphEvents.keyDownCTRL);
	document.body.removeEventListener('keyup', SVGraphEvents.keyUpCTRL);
}

window.onload = function(){
	var btnSumState = getById('btnSumState');
	var btnSubState = getById('btnSubState');
	let btnProsseguir = getById('executar');
	btnProsseguir.addEventListener('click', prosseguirOnClick);
	
	btnSubState.addEventListener('click', function(){
		statesQtd = getById('statesQtd');
		
		if(statesQtd.value > 0){
			statesQtd.value = Number(statesQtd.value) - 1;
		}
	});
	btnSumState.addEventListener('click', function(){
		statesQtd = getById('statesQtd');
		
		if(statesQtd.value < 50){
			statesQtd.value = Number(statesQtd.value) + 1;
		}
	});
	
	STATES = [
	new State('R'), 
	new State('C1'),
	new State('C2'),
	new State('C3'),
	new State('C4')
	]; 
	

	ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'L', 'K', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

	
	setAlphabetCombo();
	svg = new SVGraph(getById('machine'), STATES);
	svg.elementDraggableOn();
	states = getNodeList('.glass');
	document.body.addEventListener('keydown',SVGraphEvents.keyDownCTRL);
	document.body.addEventListener('keyup', SVGraphEvents.keyUpCTRL);
}