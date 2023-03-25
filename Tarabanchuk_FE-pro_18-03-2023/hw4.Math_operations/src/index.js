const buttonAlert = document.getElementById("add-info-alert");

buttonAlert.onclick = () => {
	const firstNumber = +prompt('Input first number.');
	const secondNumber = +prompt('Input second number.');
	let sum = `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`;
	let minus = `${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`;
	let dev = `${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`;
	let milti = `${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`;
	let rezult = [`\u{25CF} ${sum}`, ` \n\u{25CF} ${minus} `, ` \n\u{25CF} ${dev} `, ` \n\u{25CF} ${milti}`];
	alert(rezult.join(''));
}