
const buttonAlert = document.getElementById("add-info-alert");

buttonAlert.onclick = () => {
	let rezult;
	const firstNumberInput = +prompt('Input first number.');
	const secondNumberinput = +prompt('Input second number.');
	if (!!firstNumberInput) {
		const firstNumber = firstNumberInput;
	}
	if (!!secondNumberInput) {
		const secondNumber = secondNumberInput;
	}
	rezult = `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`;
	alert(rezult);
}
