const buttonAlert = document.getElementById("add-info-alert");
buttonAlert.onclick = () => {
	const firstNumber = prompt('Input first number.');
	const secondNumber = prompt('Input second number.');
	if (!firstNumber || !secondNumber) {
		alert('Missing one or both of the numbers.')
		return
	}
	if (isNaN(+firstNumber) || isNaN(+secondNumber)) {
		alert('One or both is not a number.')
		return
	}
	let add = `${firstNumber} + ${secondNumber} = ${+firstNumber + +secondNumber}`;
	let min = `${firstNumber} - ${secondNumber} = ${+firstNumber - +secondNumber}`;
	let div = `${firstNumber} / ${secondNumber} = ${+firstNumber / +secondNumber}`;
	let mul = `${firstNumber} * ${secondNumber} = ${+firstNumber * +secondNumber}`;
	let result = `\u{25CF} ${add} \n\u{25CF} ${min}  \n\u{25CF} ${div}   \n\u{25CF} ${mul}`;
	alert(result);
}