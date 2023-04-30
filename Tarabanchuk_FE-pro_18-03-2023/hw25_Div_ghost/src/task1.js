function addElement() {
	const newDiv = document.createElement("div");
	const newContent = document.createTextNode("Фокус на строчному елементі із id = '#textZone'. ");
	newDiv.appendChild(newContent);
	newDiv.setAttribute('id', 'newDiv');
	const currentDiv1 = document.getElementById("#textZone");
	document.body.insertBefore(newDiv, currentDiv1);
}
function removeElement() {
	element = document.getElementById("newDiv");
	element.parentNode.removeChild(element);
}


const buttonTask1 = document.getElementById("textZone");
buttonTask1.onfocus = () => { //focus  start
	addElement()
}
buttonTask1.onblur = () => { //focus  end
	removeElement()
}

