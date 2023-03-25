
const buttonAlert = document.getElementById("add-info-alert");

buttonAlert.onclick = () => {
	let operationCalc = prompt('Select your calc (add, sub, mult, div)');
	const firstNumber = +prompt('Input first number.');
	const secondNumber = +prompt('Input second number.');
	switch (operationCalc) {
		case 'add':
			alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
			break
		case 'sub':
			alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
			break
		case 'div':
			alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
			break
		case 'mult':
			alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
			break
		default:
			alert('You have not selected a calculation');
		// let sub = `${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`;
		// let div = `${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`;
		// let milt = `${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`;
		// let result = [` ${add}`, ` \n ${sub} `, ` \n ${div} `, ` \n ${milt}`];
	}
}