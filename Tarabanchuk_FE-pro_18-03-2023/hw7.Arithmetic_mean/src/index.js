
const buttonAlert = document.getElementById("add-info-alert");

buttonAlert.onclick = () => {
	const wrongMessage = 'Incorrect input - string(s) is not a number';
	const firstStr = prompt('Input first number');
	const secondStr = prompt('Input second number');
	const thirdStr = prompt('Input third number');
	const isFirstANumber = !isNaN(firstStr) && !isNaN(parseFloat(firstStr));
	const isSecondANumber = !isNaN(secondStr) && !isNaN(parseFloat(secondStr));
	const isThirdANumber = !isNaN(thirdStr) && !isNaN(parseFloat(thirdStr));
	const is3Number = isFirstANumber && isSecondANumber && isThirdANumber
	let calcMiddle = 0;
	if (is3Number === true) {
		calcMiddle = (+firstStr + +secondStr + +thirdStr) / 3;
	} else {
		console.log(wrongMessage);
		return
	}
	alert(` (${firstStr} + ${secondStr} + ${thirdStr}) / 3 = ${calcMiddle} `);
}