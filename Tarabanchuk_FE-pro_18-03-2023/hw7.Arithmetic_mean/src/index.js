
const buttonAlert = document.getElementById("add-info-alert");

buttonAlert.onclick = () => {
	const firstNumber = +prompt('Input first number');
	const secondNumber = +prompt('Input second number');
	const thirdNumber = +prompt('Input third number');
	const calcMiddle = (firstNumber + secondNumber + thirdNumber) / 3;
	alert(` (${firstNumber} + ${secondNumber} + ${thirdNumber}) / 3 = ${calcMiddle} `);
}