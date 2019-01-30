var getNodeList = function(name){
	return document.querySelectorAll(name);
} 

var getById = function(id){
	try{
		if(document.getElementById(id) == undefined){
			throw {
				success: false,
				error: "Elemento Indefinido", 
				message: "Objeto indefinito. não foi possível recuperar o elemento solicitado."
			};
		}
		return document.getElementById(id);
	}catch(ex){
		
	}
}

var addStyle = function(elemt, keyValue){
	if(elemt.style == ''){
		elemt.style = keyValue;
	}else{
		elemt.style += ';' + keyValue;
	}
}

var removeStyle = function(elemt, keyValue){
	var arrStyles = elemt.getAttribute('style').split(';');

	arrStyles.splice(arrStyles.indexOf(keyValue), 1);

	elemt.arrStyles = arrStyles.join(';');
}

var addClass = function(elemt, className){
	if(elemt.className == ''){
		elemt.className = className;
	}else{
		elemt.className += ' ' + className;
	}
}

var removeClass = function(elemt, className){
	var arrClass = elemt.className.split(' ');
	var idx = arrClass.indexOf(className);
	
	if(idx > 0)
		arrClass.splice(idx, idx + 1);

	elemt.className = arrClass.join(' ');
}

var isChecked = function(chk){
	if((chk != undefined  || chk != null) && chk.checked) return true;
		
	return false;	
}

var inputsIsChecked = function(inputs){
	let checkeds = [];

	inputs.forEach(input => { 
		if(isChecked(input)) 
			checkeds.push(input.value) 
	});
	
	return checkeds;
}

var inputsUnchecked = function(inputs){
	inputs.forEach(input => { 
		if(isChecked(input)) 
			input.click(); 
	});
}

var btnActive = function(){
	var btn = event.currentTarget;

	if(btn.children[0].checked){
		addClass(btn, 'active');	
	}else{
		removeClass(btn, 'active');
	}
}

var getInputContent = function(name){
	return getById(name).value;
}